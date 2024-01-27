import React from 'react';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
    return (
        <>
            <Meta title={"Login"} />
            <Breadcrumb title="Login" />
            <div className="login">
                <div className="login-card">
                    <h3 className="login-card__title">Login</h3>
                    <form action="">
                        <div className="login-card__input-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="login-card__input-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="forgot-password-link">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                        <div>
                            <button className="submit-button" >Continue</button>
                        </div>
                    </form>
                </div>
                <div className="sign-up">
                    <p>New to Storish?</p>
                    <span className="divider"></span>
                    <button className="sign-up-button">Create Your Storish Account</button>
                </div>
            </div>
        </>
    );
}

export default Login;