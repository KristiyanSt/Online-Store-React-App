import React from 'react';
import './SignUp.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.jsx';
import Meta from '../../components/Meta/Meta.jsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/user/userSlice.js';


const signUpSchema = object({
    firstname: string().required("Firstname is required"),
    lastname: string().required("Lastname is required"),
    email: string().required("Email is required").email("Email is invalid"),
    password: string().required("Password is required")
});

function SignUp(props) {
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
            dispatch(signUpUser(values));
        }
    });

    return (
        <>
            <Meta title={"Sign up"} />
            <Breadcrumb title="Sign up" />
            <div className="signup">
                <div className="signup-card">
                    <h3 className="signup-card__title">Sign Up</h3>
                    <form onSubmit={formik.handleSubmit} action="">
                        <div className="signup-card__input-group">
                            <input
                                value={formik.values.firstname}
                                onChange={formik.handleChange("firstname")}
                                onBlur={formik.handleBlur("firstname")}
                                className="form-control"
                                type="text"
                                name="firstname"
                                placeholder="Firstname"
                            />
                            <div className="error">
                                {
                                    formik.touched.firstname && formik.errors.firstname
                                }
                            </div>
                        </div>
                        <div className="signup-card__input-group">
                            <input
                                value={formik.values.lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="text"
                                name="lastname"
                                placeholder="Lastname"
                            />
                            <div className="error">
                                {
                                    formik.touched.lastname && formik.errors.lastname
                                }
                            </div>
                        </div>
                        <div className="signup-card__input-group">
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <div className="errors">
                                {formik.touched.email && formik.errors.email}
                            </div>
                        </div>
                        <div className="signup-card__input-group">
                            <input
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <div className="errors">
                                {formik.touched.password && formik.errors.password}
                            </div>
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