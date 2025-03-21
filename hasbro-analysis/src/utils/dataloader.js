import * as d3 from "d3";

export async function loadData() {
  // This path is correct only if the CSV is in public/
  const data = await d3.csv("/amazon_hasbro_products.csv");
  console.log("CSV Data Loaded:", data); // For debugging
  return data.map((d) => ({
    title: d.Title,
    price: d["Price ($)"],
    rating: d.Rating,
    brand: d.Brand,
  }));
}