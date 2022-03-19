import { useEffect, useState } from "react";
import "./App.css";
import appContext from "./appContext";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Products from "./components/Products";
import userContext from "./userContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getData = async () => {
    const productsResponse = await fetch("https://fakestoreapi.com/products");
    const productsJson = await productsResponse.json();
    console.log(productsJson);
    setProducts(productsJson);
    setFiltered(productsJson);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <userContext.Provider value={{ username: "Steve", phone: "010-1012-0102" }}>
      <appContext.Provider
        value={{
          products,
          filtered,
          setFiltered,
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <Header />
        <div className="container my-container">
          <Filter />
          <Products />
        </div>
      </appContext.Provider>
    </userContext.Provider>
  );
};

export default App;
