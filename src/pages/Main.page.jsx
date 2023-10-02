import Header from "../components/header/header.component";
import Sidebar from "../components/sidebar/Sidebar.component";

import { useState } from "react";

const Main = ()=>{
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () =>{
        setOpenDrawer((prev)=> !prev);
    }

    return (
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <Sidebar openDrawer={openDrawer} />
        </div>
    )
}

export default Main;