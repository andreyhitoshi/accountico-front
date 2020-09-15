import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'

import './Register'

const PagesRegister = () => {
    return (
        <>
            <h1>Register</h1>
            <p>Fill the fields to create a new user</p>
            <Formik
                initialValues={{}}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="firstName"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="firstName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="lastName"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="lastName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="password"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Register</button>
                </Form>
            </Formik>
        </>
    )
}
export default PagesRegister;