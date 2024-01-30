import React from 'react';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn(props) {
    return (
        <>
            <Meta title="Sign In" />
            <Breadcrumb title="Sign In" />
            <div className="signin">
                <div className="signin-card">
                    <h3 className="signin-card__title">Sign In</h3>
                    <form autocomplete="off" action="">
                        <div className="signin-card__input-group">
                            <input
                                autocomplete="off"
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="signin-card__input-group">
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
                            <button className="submit-button" type="submit">Continue</button>
                        </div>
                    </form>
                </div>
                <div className="sign-up">
                    <p>New to Storish?</p>
                    <span className="divider"></span>
                    <Link to="/signup" className="sign-up-link">Create Your Storish Account</Link>
                </div>
            </div>
        </>
    );
}

export default SignIn;