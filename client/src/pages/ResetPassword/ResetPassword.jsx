import React from 'react';
import './ResetPassword.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { Link } from 'react-router-dom';

function ResetPassword(props) {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <Breadcrumb title="Forgot password" />
            <div className="rp">
                <div className="rp-card">
                    <h3 className="rp-card__title">Reset password</h3>
                    <span>Type your new password</span>
                    <form action="">
                        <div className="rp-card__input-group">
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="New password"
                            />
                        </div>
                        <div className="rp-card__input-group">
                            <input
                                className="form-control"
                                type="password"
                                name="confpassword"
                                placeholder="Confirm password"
                            />
                        </div>
                        <div>
                            <button type="submit" className="submit-button">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;