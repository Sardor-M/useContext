import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const productsResponse = await fetch("https://fakestoreapi.com/products");
    const productsJson = await productsResponse.json();
    console.log(productsJson);
    setProducts(productsJson);

    const categoriesResponse = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categoriesJson = await categoriesResponse.json();
    console.log(categoriesJson);
    setCategories(categoriesJson);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Primary hero</p>
          <p className="subtitle">Primary subtitle</p>
        </div>
      </section>
      <div className="container my-container">
        <input
          className="input is-primary"
          type="text"
          placeholder="Primary input"
        />

        <div className="tabs">
          <ul>
            <li>
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
              eros. Donec id elit non mi porta gravida at eget metus. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
