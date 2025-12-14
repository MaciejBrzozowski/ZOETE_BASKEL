import ProductItem from "./ProductItem/ProductItem";
import axios from "axios";
import { useState, useEffect } from "react";

const propData = {
  price: "999 PLN",
};

export default function Products() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products[0].title);
        setProductData(response.data.products[0].title);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  });

  return (
    <div>
      <table>
        <tr className="table_row">
          <td>
            <img className="product_image" src="./public/kruszonka.png" alt="Niby Szarlotka" />
          </td>
          <td>Polish Apple Pie (Szarlotka)</td>
          <td>Traditional Polish apple pie with cinnamon and a buttery crust.</td>
          <td>15 PLN</td>
        </tr>
        <tr className="table_row">
          <td>
            <img className="product_image" src="./public/jakiesCus.png" alt="Chyba to ciasto?" />
          </td>
          <td>Dutch Apple Cake (Appelgebak)</td>
          <td>classNameic Dutch apple cake with raisins and whipped cream.</td>
          <td>12 EUR</td>
        </tr>
        <tr className="table_row">
          <td>
            <img className="product_image" src="./public/faworki.png" alt="Faworki są pyszne" />
          </td>
          <td>Polish Faworki</td>
          <td>Crispy, fried pastry dusted with powdered sugar.</td>
          <td>10 PLN</td>
        </tr>
        <tr className="table_row">
          <td>
            <img className="product_image" src="./public/punczki.png" alt="Oliebollen" />
          </td>
          <td>Dutch Oliebollen</td>
          <td>Traditional Dutch doughnuts filled with raisins.</td>
          <td>8 EUR</td>
        </tr>
        <ProductItem {...propData} />
      </table>
      <p>{productData}</p>
    </div>
  );
}
