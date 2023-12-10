// import axios from "axios";

// export default async function handler(req, res) {
//   const token = req.headers.authorization.split(" ")[1]; // Extract token from Authorization header

//   try {
//     const response = await axios.get(
//       "https://api.elko.cloud/v3.0/api/Catalog/Products",
//       {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTYwMTMwOTNAMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFwaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2xvY2FsaXR5IjoiNzguODQuMTEwLjExMCIsImV4cCI6MTczMzc1NjIzOCwiaXNzIjoiaHR0cHM6Ly9lY29tLmVsa29ncm91cC5jb20iLCJhdWQiOiJhcGkuZWxrby5jbG91ZCJ9._EWrFWKkTkHeM895gtAykuFJL13H1cuNwsmClTqXoAI`,
//         },
//       }
//     );
//     const products = response.data; // Assuming products are returned in response data
//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error); // Log the error for more details
//     res.status(500).json({ error: "Error fetching products" });
//   }
// }

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
