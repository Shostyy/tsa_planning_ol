import React from "react";
import './LoginPopup.scss';

export const LoginPopup = () => {
    return (
        <div className="login-pop-up" id="login-form">
            <div className="login-pop-up__description-block">
                <p className="login-pop-up__description-text">
                    Кабінет Клієнта
                </p>
                <a href="#" class="login-pop-up__close-button"></a>
            </div>
            <form action="#" class="login-pop-up__form">
                <label htmlFor="login" class="login-pop-up__label">
                    Логін
                </label>
                <input type="text" id="login" name="login"  class="login-pop-up__input"/>

                <label htmlFor="password" class="login-pop-up__label">
                    Пароль
                </label>
                <input type="password" id="password" name="password"  class="login-pop-up__input"/>
                <button type="submit" value="Submit" class="login-pop-up__button">Увійти</button>
            </form>
            <a href="#" class="login-pop-up__refresh-password">
                Забув пароль
            </a>
        </div>
    );
}