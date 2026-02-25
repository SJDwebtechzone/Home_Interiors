import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    const [mode, setMode] = useState('login') // 'login' | 'signup' | 'forgot'
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
    const [show, setShow] = useState(false)
    const [loading, setLoad] = useState(false)
    const [done, setDone] = useState(false)

    const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const submit = e => {
        e.preventDefault()
        setLoad(true)
        setTimeout(() => { setLoad(false); setDone(true) }, 1500)
    }

    return (
        <div className="login-page page-top hero-bg noise">
            <div className="login-center">

                {/* Brand mark */}
                <div className="login-brand anim-fade-up">
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">Haanaak</span>
                </div>

                {/* Card */}
                <div className="login-card glass-card anim-fade-up-d1">

                    {/* Tab switcher */}
                    {mode !== 'forgot' && (
                        <div className="login-tabs">
                            <button
                                className={mode === 'login' ? 'active' : ''}
                                onClick={() => { setMode('login'); setDone(false) }}
                                id="tab-login"
                            >Sign In</button>
                            <button
                                className={mode === 'signup' ? 'active' : ''}
                                onClick={() => { setMode('signup'); setDone(false) }}
                                id="tab-signup"
                            >Create Account</button>
                        </div>
                    )}

                    {done ? (
                        <div className="login-success">
                            <div className="success-ring">✦</div>
                            <h3>
                                {mode === 'forgot'
                                    ? 'Reset Link Sent!'
                                    : mode === 'signup'
                                        ? 'Welcome to Haanaak!'
                                        : 'Welcome Back!'}
                            </h3>
                            <p>
                                {mode === 'forgot'
                                    ? 'Check your inbox for the password reset link.'
                                    : 'You have successfully been authenticated.'}
                            </p>
                            <Link to="/dashboard" className="btn-primary" id="login-home-btn">Go to Dashboard</Link>
                        </div>
                    ) : (
                        <>
                            <div className="login-head">
                                <h3>
                                    {mode === 'login' && 'Sign In to Your Account'}
                                    {mode === 'signup' && 'Create Your Account'}
                                    {mode === 'forgot' && 'Reset Your Password'}
                                </h3>
                                <p>
                                    {mode === 'login' && 'Access your personal design dashboard.'}
                                    {mode === 'signup' && 'Join Haanaak and begin your design journey.'}
                                    {mode === 'forgot' && "Enter your email and we'll send a reset link."}
                                </p>
                            </div>

                            <form className="login-form" onSubmit={submit} id="auth-form">
                                {mode === 'signup' && (
                                    <div className="field-wrap">
                                        <label htmlFor="auth-name">Full Name</label>
                                        <input id="auth-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handle} required />
                                    </div>
                                )}

                                <div className="field-wrap">
                                    <label htmlFor="auth-email">Email Address</label>
                                    <input id="auth-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handle} required />
                                </div>

                                {mode !== 'forgot' && (
                                    <div className="field-wrap">
                                        <label htmlFor="auth-password">Password</label>
                                        <div className="password-wrap">
                                            <input
                                                id="auth-password"
                                                name="password"
                                                type={show ? 'text' : 'password'}
                                                placeholder="••••••••"
                                                value={form.password}
                                                onChange={handle}
                                                required
                                            />
                                            <button type="button" className="eye-btn" onClick={() => setShow(s => !s)} id="toggle-password">
                                                {show ? '🙈' : '👁️'}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {mode === 'signup' && (
                                    <div className="field-wrap">
                                        <label htmlFor="auth-confirm">Confirm Password</label>
                                        <input id="auth-confirm" name="confirm" type="password" placeholder="••••••••" value={form.confirm} onChange={handle} required />
                                    </div>
                                )}

                                {mode === 'login' && (
                                    <div className="login-extras">
                                        <label className="remember-wrap">
                                            <input type="checkbox" id="remember-me" /> Remember me
                                        </label>
                                        <button type="button" className="forgot-link" onClick={() => { setMode('forgot'); setDone(false) }} id="forgot-password-btn">
                                            Forgot password?
                                        </button>
                                    </div>
                                )}

                                <button type="submit" className="btn-primary submit-btn" id="auth-submit-btn" disabled={loading}>
                                    {loading ? (
                                        <span className="spinner" />
                                    ) : (
                                        <>
                                            {mode === 'login' && 'Sign In ✦'}
                                            {mode === 'signup' && 'Create Account ✦'}
                                            {mode === 'forgot' && 'Send Reset Link ✦'}
                                        </>
                                    )}
                                </button>
                            </form>

                            {mode === 'forgot' && (
                                <button className="back-link" onClick={() => setMode('login')} id="back-to-login-btn">
                                    ← Back to Sign In
                                </button>
                            )}

                            {/* Divider */}
                            <div className="or-divider"><span>or continue with</span></div>

                            {/* Social login */}
                            <div className="social-login-btns">
                                <button className="social-btn" id="google-login-btn">
                                    <span>G</span> Google
                                </button>
                                <button className="social-btn" id="apple-login-btn">
                                    <span>⌘</span> Apple
                                </button>
                            </div>

                            {/* Switch mode */}
                            {mode !== 'forgot' && (
                                <p className="switch-mode">
                                    {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                                    <button
                                        className="switch-btn"
                                        onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setDone(false) }}
                                        id="switch-mode-btn"
                                    >
                                        {mode === 'login' ? 'Create one' : 'Sign In'}
                                    </button>
                                </p>
                            )}
                        </>
                    )}
                </div>

                <p className="login-footer-note">
                    By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </p>
            </div>

            {/* Decorative orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
        </div>
    )
}
