import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

function App() {
  const [content, setContent] = useState({
    category: " ",
    data: [],
  });
  return (
    <div className="app-container">
      <Sidebar setContent={setContent} />
      <Content content={content} />
    </div>
  );
}

export default App;
