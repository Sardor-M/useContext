import "./app.css"

const Content = (props) => {
    return (
      <div className = "content">
        <h1>
          {props.text} -{ props.substext}
        </h1>
        { props.children}
      </div>
    );
};

export default Content;