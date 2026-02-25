import { Link } from 'react-router-dom'
import './Dashboard.css'

const myProjects = [
    { title: 'The Sky Villa', status: 'In Progress', progress: 65, phase: 'Procurement', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
    { title: 'Zen Office', status: 'Completed', progress: 100, phase: 'Final Handover', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
]

const upcomingMeetings = [
    { date: 'Oct 28', time: '11:00 AM', title: 'Material Selection', type: 'Studio Visit' },
    { date: 'Nov 02', time: '4:30 PM', title: 'Lighting Review', type: 'Virtual Zoom' },
]

export default function Dashboard() {
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
                    <Link to="/contact" className="btn-primary">New Project ✦</Link>
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
