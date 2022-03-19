import { useContext } from "react";
import appContext from "../appContext";

function Products() {
  const { filtered } = useContext(appContext);

  return (
    <>
      {filtered.map((product) => {
        return (
          <div className="card my-card" key={`product-${product.id}`}>
            <header className="card-header">
              <p className="card-header-title">
                {product.title} (${product.price})
              </p>
            </header>

            <div className="card-content">
              <div className="content">
                <p>{product.category}</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Products;
