import React, { useEffect } from "react";
import { itemService } from "../services/Auth_services";
const Items = () => {
  //const [objetos, setObjetos] = useState({});

  useEffect(() => {
    itemService()
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        result.map((item, index) => {
          // eslint-disable-next-line no-unused-vars
          const { _id, product_name, category, price, image } = item;
          console.log(
            "id",
            _id,
            "product_name",
            product_name,
            "category",
            category,
            "precio",
            price
          );
        });

        history.push("/dashboard/items");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>Hola</h3>
    </>
  );
};

export default Items;
