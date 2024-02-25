const axios = require("axios");

// URL базового эндпоинта
export const API_URL = "https://aldiyar-backender.org.kg";

// Функция для получения туров
export async function getTours() {
  try {
    const response = await axios.get(API_URL + "/list-tours");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching tours:", error);
  }
}
