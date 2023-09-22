import React, { useEffect, useState }  from "react";
import "./Main.scss";

export const Main = () => {
    const [cookieExists, setCookieExists] = useState(false);
    
    useEffect(() => {
        const checkCookie = () => {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith('login=')) {
                    setCookieExists(true);
                    break;
                }
            }
        };
        checkCookie();
    }, []);

    return (
       <main className="main">
        {cookieExists ? (
            <p className="ok">exist</p>
        ) : (
            
            <h1 className="main__header">
                Вітаємо в проекті
                <br></br>
                “Планування”
            </h1>

        )}
       </main>
    );
}