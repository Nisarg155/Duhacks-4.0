import  { useState } from 'react';

const Home = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="container">
            <div className="left">
                <section className="form-section">
                    <div className="flex-container">
                        <div className="form-container">
                            <div className="form-content">
                                <h1 className="form-title">{isSignup ? 'Create an account' : 'Login to your account'}</h1>
                                <form className="form" action="#">
                                    {isSignup && (
                                        <div className="form-group">
                                            <label htmlFor="fullname" className="form-label">Full Name</label>
                                            <input type="text" name="fullname" id="fullname" className="form-input" placeholder="John Doe" required />
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Your email</label>
                                        <input type="email" name="email" id="email" className="form-input" placeholder="name@company.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="form-input" required />
                                    </div>
                                    <div className="form-flex">
                                        {!isSignup && (
                                            <>
                                                <div className="form-checkbox-group">
                                                    <input id="remember" type="checkbox" className="form-checkbox" />
                                                    <label htmlFor="remember" className="form-checkbox-label">Remember me</label>
                                                </div>
                                                <a href="#" className="form-link">Forgot password?</a>
                                            </>
                                        )}
                                    </div>
                                    <button type="submit" className="form-button">{isSignup ? 'Sign up' : 'Log in'}</button>
                                    <p className="form-footer">
                                        {isSignup ? 'Already have an account? ' : 'Don’t have an account yet? '}
                                        <a href="#" className="form-link" onClick={(e) => {e.preventDefault(); setIsSignup(!isSignup);}}>
                                            {isSignup ? 'Log in' : 'Sign up'}
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="right">
                <img src="src/assets/imag.jpg" alt="Background" />
            </div>
        </div>
    );
};

export default Home;
