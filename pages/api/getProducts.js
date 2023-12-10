import axios from "axios";
import { getBearerToken } from "./getToken"; // Import the getBearerToken function

export default async function handler(req, res) {
  try {
    const token = await getBearerToken(); // Get the token using the imported function
    console.log("Token:", token);
    const response = await axios.get(
      "https://api.elko.cloud/v3.0/api/Catalog/Products",
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the entire token response as bearer token
        },
      }
    );
    const products = response.data; // Assuming products are returned in response data
    res.status(200).json(products);
  } catch (error) {
    console.error(error); // Log the error for more details
    res.status(500).json({ error: "Error fetching products" });
  }
}
