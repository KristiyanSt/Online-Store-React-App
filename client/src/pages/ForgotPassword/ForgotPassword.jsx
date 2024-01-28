import React from 'react';
import './ForgotPassword.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { Link } from 'react-router-dom';

function ForgotPassword(props) {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title="Forgot password" />
            <div className="fp">
                <div className="fp-card">
                    <h3 className="fp-card__title">Reset your password</h3>
                    <span>We'll send you additional information on your email</span>
                    <form action="">
                        <div className="fp-card__input-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="fp_buttons-wrapper">
                            <Link to="/signin" className="cancel-button">Cancel</Link>
                            <button type="submit" className="submit-button">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;