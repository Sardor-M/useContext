import { useContext } from "react";
import appContext from "../appContext";
import userContext from "../userContext";

function Header() {
  const { selectedCategory, setSelectedCategory } = useContext(appContext);
  const { username, phone } = useContext(userContext);

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">{username}</p>
        <p className="subtitle">{phone}</p>
        <button
          style={{
            fontWeight: selectedCategory === "electronics" ? "bold" : "normal",
          }}
          onClick={() => setSelectedCategory("electronics")}
          className="button is-warning"
        >
          Apply "electronics" filter
        </button>
      </div>
    </section>
  );
}

export default Header;
