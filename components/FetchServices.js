import React from "react";

function fetchData() {

  const API_URI =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h";

  const getAllData = () => {
    const res = axios
      .get(API_URI)
      .then((res) => res.data)
      .catch((error) => {
        console.log("Error in axios", error);
      });
      return  res;
  };


}

const fetchServices = {fetchData}
export default fetchServices;