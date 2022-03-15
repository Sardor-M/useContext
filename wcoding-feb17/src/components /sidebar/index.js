import SidebarButton from "./SidebarButton";
import "./style.css";


const Sidebar = ({setContent}) => {
    return (
        <div className="sidebar-container">    
        <SidebarButton setContent={setContent} text = "Users"/>
        <SidebarButton setContent={setContent} text="new text"/>
        </div>
    );
};




export default Sidebar;