import ProductItem from "./ProductItem/ProductItem";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Products() {
  let nextId = 0;
  const [productData, setProductData] = useState(Array<object>());

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/MaciejBrzozowski/ZOETE_BASKEL_CONFIG/a74f17cfcad7246369e54ae0267443bef0bd8ce2/products.json")
      .then((response) => {
        console.log(response.data.products);
        setProductData([...response.data.products]);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  });

  return (
    <div>
      <table>
        {productData.map((item: any) => (
          <ProductItem key={"ProductItem_" + nextId++} {...item} />
        ))}
      </table>
    </div>
  );
}
