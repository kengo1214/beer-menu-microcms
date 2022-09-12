import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "beer-site",
  apiKey: process.env.API_KEY,
});
