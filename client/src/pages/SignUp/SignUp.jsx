import React from 'react';
import './SignUp.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { Link } from 'react-router-dom';

function SignUp(props) {
    return (
        <>
            <Meta title={"Sign up"} />
            <Breadcrumb title="Sign up" />
            <div className="signup">
                <div className="signup-card">
                    <h3 className="signup-card__title">Sign Up</h3>
                    <form action="">
                        <div className="signup-card__input-group">
                            <input
                                className="form-control"
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                            />
                        </div>
                        <div className="signup-card__input-group">
                            <input
                                className="form-control"
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                            />
                        </div>
                        <div className="signup-card__input-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="signup-card__input-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>

                        <button type="submit" className="submit-button">Continue</button>

                        <span>
                            Already have an account? 
                            <Link to="/signin">Sign in</Link>
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;