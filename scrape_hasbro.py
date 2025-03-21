import time
import random
import pandas as pd
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

# Amazon Hasbro search results page
url = "https://www.amazon.com/s?k=hasbro"

# Generate a random user agent to avoid detection
ua = UserAgent()
headers = {"User-Agent": ua.random}

# Function to extract product data
def extract_product_data(html):
    soup = BeautifulSoup(html, "html.parser")
    products = soup.find_all("div", {"data-component-type": "s-search-result"})
    
    product_list = []
    
    for product in products:
        # Extract Title
        title_tag = product.find("h2")
        title = title_tag.text.strip() if title_tag else "N/A"

        # Extract Price (Fixing double dots issue)
        price_whole = product.find("span", class_="a-price-whole")
        price_fraction = product.find("span", class_="a-price-fraction")

        if price_whole and price_fraction:
            price = f"{price_whole.text.strip()}.{price_fraction.text.strip()}"
        elif price_whole:
            price = price_whole.text.strip()  # Handle missing fraction properly
        else:
            price = "N/A"

        # Ensure no double dots in price
        price = price.replace("..", ".")

        # Extract Star Rating
        rating_tag = product.find("span", {"class": "a-icon-alt"})
        rating = rating_tag.text.strip().split()[0] if rating_tag else "N/A"

        # Extract Brand (Assuming all are Hasbro)
        brand = "Hasbro"

        # Append to list (Without Link)
        product_list.append({
            "Title": title,
            "Price ($)": price,
            "Rating": rating,
            "Brand": brand
        })

    return product_list

# Use Playwright to load dynamic content
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(extra_http_headers=headers)

    # Load the Amazon page
    page.goto(url, timeout=120000)

    # Scroll down gradually to load more results
    for _ in range(5):
        page.evaluate("window.scrollBy(0, document.body.scrollHeight)")
        time.sleep(random.uniform(2, 4))  # Random delay to mimic human behavior

    # Extract HTML
    html = page.content()
    browser.close()

# Extract product data from loaded page
product_data = extract_product_data(html)

# Save to CSV (Without Links)
df = pd.DataFrame(product_data)
df.to_csv("amazon_hasbro_products.csv", index=False)

# Display first 10 results
print(df.head(10))