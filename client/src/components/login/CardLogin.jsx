// import React from 'react';
import { useNavigate } from "react-router-dom";

const CardLogin = () => {
    const navigate = useNavigate();

    const doLogin = () => {
        navigate("/signup")
    }
    
    return (
        <article className="cardLogin">
            <div className="cardLogin__hdr">
                <h2>Welcolme back to App</h2>
                <span>Log in to your account</span>
            </div>
            <div className="cardLogin__frm">
                <form action="" onSubmit={doLogin}>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Ingresar email"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Ingresar contraseña"/>
                    </div>
                    <div className="input-group">
                        <a href="">Forgot yur password?</a>
                        <button type="submit">Submit</button>
                        <span>Dont have an account yet? <a href="">Sign up for free!</a></span>
                    </div>
                </form>
            </div>
        </article>
    );
}

export default CardLogin;