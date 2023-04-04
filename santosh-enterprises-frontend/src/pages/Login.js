import React from 'react'

const Login = () => {
    return (
        <div>
        <div className="modal fade" id="login-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="login-modal-label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="login-modal-label">Login Info</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="login-username" />
                        <label htmlFor="floatingInput">Email address /Mobile No./User name</label>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="login-password" autoComplete='off'/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <br />
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="login-remember-me" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn" id='login-button'>Login</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login