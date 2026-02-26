import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const upcomingMeetings = [
    { date: 'Oct 28', time: '11:00 AM', title: 'Material Selection', type: 'Studio Visit' },
    { date: 'Nov 02', time: '4:30 PM', title: 'Lighting Review', type: 'Virtual Zoom' },
]

export default function Login() {
    // Auth States
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [mode, setMode] = useState('login')
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    // Dashboard Data States
    const [myProjects, setMyProjects] = useState([])
    const [myPayments, setMyPayments] = useState([])

    const handleInput = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const fetchDashboardData = async (userId) => {
        try {
            const projRes = await fetch(`http://localhost:5001/api/user/${userId}/projects`)
            const projData = await projRes.json()
            if (projData.success) setMyProjects(projData.projects)

            const payRes = await fetch(`http://localhost:5001/api/user/${userId}/payments`)
            const payData = await payRes.json()
            if (payData.success) setMyPayments(payData.payments)
        } catch (err) {
            console.error('Error fetching dashboard data:', err)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        setErrorMsg('')

        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: form.email, password: form.password })
            });
            const data = await response.json();

            if (data.success) {
                setUser(data.user);
                setIsLoggedIn(true);
                await fetchDashboardData(data.user.id);
            } else {
                setErrorMsg(data.message || 'Login failed. Please verify credentials.');
            }
        } catch (err) {
            console.error(err);
            // Fallback for mocked UI if DB isn't running
            setErrorMsg('Unable to connect to server. Try test@example.com / password123 when Postgres is running.');
            // Allow mock login just for frontend demonstration if server is absent 
            if (form.email === 'test' || form.email === 'user@example.com') { // Basic hard bypass for debug
                // Ignore bypass for now, strict db requirement 
            }
        }
        setLoading(false)
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

                        {errorMsg && <div className="error-banner">{errorMsg}</div>}

                        <form className="login-form" onSubmit={handleSubmit}>
                            {mode === 'signup' && (
                                <div className="field-wrap">
                                    <label>Full Name</label>
                                    <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleInput} required={mode === 'signup'} />
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
                                    <input name="confirm" type="password" placeholder="••••••••" value={form.confirm} onChange={handleInput} required={mode === 'signup'} />
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
                        <div className="dash-avatar">{user?.name[0] || 'U'}</div>
                        <div>
                            <h1>Welcome Back, <span className="text-gold">{user?.name || 'Client'}</span></h1>
                            <p>Here is the status of your luxury design journey.</p>
                        </div>
                    </div>
                    <button onClick={() => { setIsLoggedIn(false); setUser(null); }} className="btn-outline">Sign Out</button>
                </header>

                <div className="dash-grid">
                    {/* Main Column */}
                    <div className="dash-col dash-main anim-fade-up-d1">

                        {/* Active Projects */}
                        <div className="dash-card glass-card">
                            <div className="card-head">
                                <h3>Active Projects</h3>
                                <div className="badge">Total {myProjects.length}</div>
                            </div>
                            <div className="project-list">
                                {myProjects.length === 0 ? <p>No projects found.</p> : myProjects.map((p, i) => (
                                    <div key={p.id} className="dash-project-item">
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

                        {/* Payments & Invoices (NEW) */}
                        <div className="dash-card glass-card">
                            <div className="card-head">
                                <h3>Payment History & Dues</h3>
                            </div>
                            <div className="payment-table-wrap">
                                <table className="payment-table">
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myPayments.length === 0 ? <tr><td colSpan="4">No payments found.</td></tr> : myPayments.map(pay => {
                                            const d = new Date(pay.date);
                                            return (
                                                <tr key={pay.id}>
                                                    <td>{pay.description}</td>
                                                    <td>{d.toLocaleDateString()}</td>
                                                    <td>₹ {parseFloat(pay.amount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
                                                    <td>
                                                        <span className={`pay-status ${pay.status.toLowerCase()}`}>{pay.status}</span>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Moodboards */}
                        <div className="dash-card glass-card">
                            <div className="card-head">
                                <h3>Recent Mood Boards</h3>
                            </div>
                            <div className="mood-grid">
                                {[1, 2].map(m => (
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
