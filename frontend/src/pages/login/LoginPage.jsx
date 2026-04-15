import React from 'react'
import './loginPage.css'

const LoginPage = () => {
    return (
        <div className="parennt-div">
            <form className="form" action="">
                <div className="child-div-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" />
                </div>

                <div className="child-div-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" />
                </div>

                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage