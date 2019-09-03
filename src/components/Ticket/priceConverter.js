/*
INPUT: int price - 83733
OUTPUT: "83 733 P"
*/

export const priceConverter = (price, currency) => {
  if (currency === "usd") {
    price = price / 66;
    price = Number(price).toFixed(2);
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
  } else if (currency === "eur") {
    price = price / 75;
    price = Number(price).toFixed(2);
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";
  } else {
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
  }

  return price;
};
