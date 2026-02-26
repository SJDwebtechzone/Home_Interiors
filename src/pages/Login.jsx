import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const myProjects = [
    { title: 'The Sky Villa', status: 'In Progress', progress: 65, phase: 'Procurement', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
    { title: 'Zen Office', status: 'Completed', progress: 100, phase: 'Final Handover', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
]

const upcomingMeetings = [
    { date: 'Oct 28', time: '11:00 AM', title: 'Material Selection', type: 'Studio Visit' },
    { date: 'Nov 02', time: '4:30 PM', title: 'Lighting Review', type: 'Virtual Zoom' },
]

export default function Login() {
    // Auth States
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [mode, setMode] = useState('login')
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleInput = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        // Simulated Auth
        setTimeout(() => {
            setLoading(false)
            setIsLoggedIn(true)
        }, 1500)
    }

    if (!isLoggedIn) {
        return (
            <div className="login-page page-top hero-bg noise">
                <div className="login-center">
                    <div className="login-brand anim-fade-up">
                        <span className="logo-icon">✦</span>
                        <span className="logo-text">Haanaak Portal</span>
                    </div>

                    <div className="login-card glass-card anim-fade-up-d1">
                        {mode !== 'forgot' && (
                            <div className="login-tabs">
                                <button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Sign In</button>
                                <button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Create Account</button>
                            </div>
                        )}

                        <div className="login-head">
                            <h3>
                                {mode === 'login' && 'Sign In to Your Portal'}
                                {mode === 'signup' && 'Create Your Account'}
                                {mode === 'forgot' && 'Reset Your Password'}
                            </h3>
                            <p>
                                {mode === 'login' && 'Access your personal design journey.'}
                                {mode === 'signup' && 'Join Haanaak and begin your design journey.'}
                                {mode === 'forgot' && "Enter your email and we'll send a reset link."}
                            </p>
                        </div>

                        <form className="login-form" onSubmit={handleSubmit}>
                            {mode === 'signup' && (
                                <div className="field-wrap">
                                    <label>Full Name</label>
                                    <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleInput} required />
                                </div>
                            )}

                            <div className="field-wrap">
                                <label>Email Address</label>
                                <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleInput} required />
                            </div>

                            {mode !== 'forgot' && (
                                <div className="field-wrap">
                                    <label>Password</label>
                                    <div className="password-wrap">
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="••••••••"
                                            value={form.password}
                                            onChange={handleInput}
                                            required
                                        />
                                        <button type="button" className="eye-btn" onClick={() => setShowPassword(s => !s)}>
                                            {showPassword ? '🙈' : '👁️'}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {mode === 'signup' && (
                                <div className="field-wrap">
                                    <label>Confirm Password</label>
                                    <input name="confirm" type="password" placeholder="••••••••" value={form.confirm} onChange={handleInput} required />
                                </div>
                            )}

                            {mode === 'login' && (
                                <div className="login-extras">
                                    <label className="remember-wrap">
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <button type="button" className="forgot-link" onClick={() => setMode('forgot')}>Forgot password?</button>
                                </div>
                            )}

                            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                                {loading ? <span className="spinner" /> : (
                                    <>
                                        {mode === 'login' && 'Enter Portal ✦'}
                                        {mode === 'signup' && 'Create Account ✦'}
                                        {mode === 'forgot' && 'Send Reset Link ✦'}
                                    </>
                                )}
                            </button>
                        </form>

                        {mode === 'forgot' && (
                            <button className="back-link" onClick={() => setMode('login')}>← Back to Sign In</button>
                        )}

                        <div className="or-divider"><span>or continue with</span></div>

                        <div className="social-login-btns">
                            <button className="social-btn"><span>G</span> Google</button>
                            <button className="social-btn"><span>⌘</span> Apple</button>
                        </div>

                        {mode !== 'forgot' && (
                            <p className="switch-mode">
                                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                                <button className="switch-btn" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
                                    {mode === 'login' ? 'Create one' : 'Sign In'}
                                </button>
                            </p>
                        )}
                    </div>

                    <p className="login-footer-note">
                        By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </p>
                </div>

                <div className="orb orb-1" />
                <div className="orb orb-2" />
            </div>
        )
    }

    // Real Dashboard Content
    return (
        <div className="dashboard-page page-top">
            <div className="section-wrap">

                {/* Header */}
                <header className="dash-header anim-fade-up">
                    <div className="dash-user">
                        <div className="dash-avatar">JD</div>
                        <div>
                            <h1>Welcome Back, <span className="text-gold">Jane Doe</span></h1>
                            <p>Here is the status of your luxury design journey.</p>
                        </div>
                    </div>
                    <button onClick={() => setIsLoggedIn(false)} className="btn-outline">Sign Out</button>
                </header>

                <div className="dash-grid">
                    {/* Active Projects */}
                    <div className="dash-col dash-main anim-fade-up-d1">
                        <div className="dash-card glass-card">
                            <div className="card-head">
                                <h3>Active Projects</h3>
                                <div className="badge">Total 2</div>
                            </div>
                            <div className="project-list">
                                {myProjects.map((p, i) => (
                                    <div key={i} className="dash-project-item">
                                        <div className="p-img"><img src={p.img} alt={p.title} /></div>
                                        <div className="p-info">
                                            <h4>{p.title}</h4>
                                            <p>{p.phase} · {p.status}</p>
                                            <div className="p-progress-bar">
                                                <div className="p-progress" style={{ width: `${p.progress}%` }} />
                                            </div>
                                        </div>
                                        <div className="p-action">
                                            <button className="btn-outline">View Details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dash-card glass-card">
                            <div className="card-head">
                                <h3>Recent Mood Boards</h3>
                            </div>
                            <div className="mood-grid">
                                {[1, 2, 3].map(m => (
                                    <div key={m} className={`mood-item mood-${m}`}>
                                        <div className="mood-overlay">
                                            <span>Collection #{m}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="dash-col dash-side anim-fade-up-d2">
                        <div className="dash-card glass-card">
                            <h3>Upcoming Meetings</h3>
                            <div className="meeting-list">
                                {upcomingMeetings.map((m, i) => (
                                    <div key={i} className="meeting-item">
                                        <div className="m-date">
                                            <strong>{m.date.split(' ')[1]}</strong>
                                            <span>{m.date.split(' ')[0]}</span>
                                        </div>
                                        <div className="m-info">
                                            <h4>{m.title}</h4>
                                            <p>{m.time} · {m.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="dash-card dash-cta glass-card">
                            <span className="badge">Need Help?</span>
                            <h4>Your Personal Designer</h4>
                            <div className="designer-tag">
                                <div className="dt-avatar">AK</div>
                                <div>
                                    <strong>Aanya Kapoor</strong>
                                    <span>Lead Creative</span>
                                </div>
                            </div>
                            <button className="btn-primary w-full">Message Aanya</button>
                        </div>
                    </aside>
                </div>

            </div>
        </div>
    )
}

