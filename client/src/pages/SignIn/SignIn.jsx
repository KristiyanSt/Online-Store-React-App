import React from 'react';
import './SignIn.css';
import Meta from '../../components/Meta/Meta.jsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import { Link, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/user/userSlice.js';

const signInSchema = object({
    email: string().required("Email is required").email("Email is invalid"),
    password: string().required("Password is required")
});

function SignIn(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: signInSchema,
        onSubmit: values => {
            dispatch(signInUser(values));
        }
    });
    return (
        <>
            <Meta title="Sign In" />
            <Breadcrumb title="Sign In" />
            <div className="signin">
                <div className="signin-card">
                    <h3 className="signin-card__title">Sign In</h3>
                    <form onSubmit={formik.handleSubmit} action="">
                        <div className="signin-card__input-group">
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <div className="error">
                                { formik.touched.email && formik.errors.email}
                            </div>
                        </div>
                        <div className="signin-card__input-group">
                            <input
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <div className="error">
                                { formik.touched.password && formik.errors.password}
                            </div>
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