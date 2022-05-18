import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
   const { data } = await axios.get(url, {
      headers: {
         "X-RapidAPI-Host": "bayut.p.rapidapi.com",
         "X-RapidAPI-Key": "8011936c87msh32e6dbb590bbbf5p136e68jsn11e955b2f74b",
      },
   });
   return data;
};
