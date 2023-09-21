import React from "react";
//components
import { LoginPopup } from "./components/LoginPopup";
import { Header } from "./components/Header";
import './styles/general.scss';


function App() {
    return (
        <div>
            <Header />
            <LoginPopup />
        </div>
    )
}

export default App;