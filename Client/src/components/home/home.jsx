import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <div className="left">
                <section className="form-section">
                    <div className="flex-container">
                        <div className="form-container">
                            <div className="form-content">
                                <h1 className="form-title">Sign in to your account</h1>
                                <form className="form" action="#">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Your email</label>
                                        <input type="email" name="email" id="email" className="form-input" placeholder="name@company.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="form-input" required />
                                    </div>
                                    <div className="form-flex">
                                        <div className="form-checkbox-group">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="form-checkbox" required />
                                            <label htmlFor="remember" className="form-checkbox-label">Remember me</label>
                                        </div>
                                        <a href="#" className="form-link">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="form-button">Sign in</button>
                                    <p className="form-footer">
                                        Don’t have an account yet? <a href="#" className="form-link">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="right">
                <img src="src\assets\imag.jpg" alt="" />
            </div>
        </div>
    )
}

export default Home
