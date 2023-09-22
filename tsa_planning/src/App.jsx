import React from "react";
//components
import { LoginPopup } from "./components/LoginPopup";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import './styles/general.scss';


function App() {
    return (
        <div>
            <Header />
            <LoginPopup />
            <Main />
        </div>
    )
}

export default App;