import "./style.css";

const SidebarButton = ({ text, setContent }) => {
  return (
    <div className="button-container">
      <button
        className="pure-button pure-button-primary"
        onClick={async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/${text}`
          );

          const data = await response.json();
          console.log(data);
          setContent({
            category: text,
            data,
          });
        }}
      >
        {" "}
        {text}
      </button>
    </div>
  );
};

export default SidebarButton;
