import React from 'react'
import './loginPage.css'

const LoginPage = () => {
    return (
        <div className="login-wrapper">
            <div className="login-header">

                <h1>Login</h1>
            </div>

            <div className="login-container">
                <form className="form" action="">
                    <div className="form-group">
                        <label htmlFor="email">Username or email address</label>
                        <input type="email" id="email" required />
                    </div>

                    <div className="form-group">
                        <div className="label-wrapper">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                        <input type="password" id="password" required />
                    </div>

                    <button className="submit-btn" type="submit">Login</button>
                </form>

                <div className="create-account">
                    New? <a href="#">Create an account</a>.
                </div>
            </div>
        </div>
    )
}

export default LoginPage