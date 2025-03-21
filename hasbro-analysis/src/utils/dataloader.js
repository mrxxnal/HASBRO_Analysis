import * as d3 from "d3";

export async function loadData() {
  const data = await d3.csv("/amazon__hasbro_products.csv");
  return data.map((d) => ({
    title: d.Title,
    price: parseFloat(d["Price ($)"]) || 0,
    rating: parseFloat(d.Rating) || null,
    brand: d.Brand,
  }));
}