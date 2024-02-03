import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [productList, setProductsList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let fetched = await axios.get(
          "https://dummyjson.com/products/search?q=phone"
        );
        setProductsList(fetched.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [productList]);

  return (
    <div>
      <h1> Product Launch </h1>
      <div className="product_wrapper">
        {productList ? (
          <>
            {productList.map((elm) => {
              return (
                <div key={elm.id} className="product_details">
                  <p>{elm.brand}</p>
                  <p>{elm.title}</p>
                  <p>{elm.description}</p>
                </div>
              );
            })}
          </>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default App;
