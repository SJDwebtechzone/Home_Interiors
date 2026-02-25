import { Link } from 'react-router-dom'
import './About.css'

const values = [
    { icon: '◈', title: 'Integrity', desc: 'Honest timelines, transparent pricing, and zero compromise on quality.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600' },
    { icon: '✦', title: 'Innovation', desc: 'We blend time-honoured craftsmanship with cutting-edge design thinking.', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600' },
    { icon: '◎', title: 'Empathy', desc: 'Every home is personal. We listen deeply before we ever lift a pencil.', img: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=600' },
    { icon: '◉', title: 'Excellence', desc: 'Good enough is never good enough. We relentlessly pursue perfection.', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600' },
]

const team = [
    { name: 'Aanya Kapoor', role: 'Founder & Creative Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', yrs: '14 yrs' },
    { name: 'Rishi Malhotra', role: 'Head of Architecture', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', yrs: '11 yrs' },
    { name: 'Zara Oberoi', role: 'Lead Interior Stylist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', yrs: '9 yrs' },
    { name: 'Dev Anand Nair', role: 'Project Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400', yrs: '12 yrs' },
]

const milestones = [
    { year: '2011', event: 'Haanaak founded in Chennai by Aanya Kapoor with a vision to redefine Indian luxury interiors.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400' },
    { year: '2014', event: 'Expanded to Delhi & Bangalore; crossed 100 completed projects milestone.', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400' },
    { year: '2017', event: 'Awarded "Best Interior Design Studio" at the India Design Excellence Awards.', img: 'https://images.unsplash.com/photo-1541604193435-22442431bdca?w=400' },
    { year: '2020', event: 'Launched Haanaak Digital — a virtual design consultation service for global clients.', img: 'https://images.unsplash.com/photo-1615529328329-92604660d1e9?w=400' },
    { year: '2023', event: 'Completed 1,000th project. Featured in Architectural Digest India & Elle Décor.', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400' },
    { year: '2025', event: 'Expanded internationally with studios in Dubai and Singapore.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400' },
]

export default function About() {
    return (
        <div className="about-page page-top">

            {/* ── Page Hero ── */}
            <section
                className="page-hero noise"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.7), rgba(26, 23, 20, 0.8)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="section-wrap hero-content" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="hero-text anim-fade-up" style={{ alignItems: 'center', maxWidth: '800px' }}>
                        <span className="badge">Our Story</span>
                        <h1 className="hero-heading">
                            Crafting <span className="text-gold">Extraordinary</span><br />
                            Living Experiences
                        </h1>
                        <p className="hero-sub" style={{ maxWidth: '600px' }}>
                            Founded in 2011, Haanaak has spent over a decade redefining what Indian luxury interiors can be — personal, purposeful, and breathtakingly beautiful.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Mission ── */}
            <section className="mission-section">
                <div className="section-wrap mission-grid">
                    <div className="mission-visual">
                        <div className="mission-box glass-card">
                            <div className="mission-icon-ring">✦</div>
                            <h3>Our Mission</h3>
                            <div className="gold-divider"><span /><i /><span /></div>
                            <p>To transform every living space into a personalised sanctuary — where aesthetics and function meet in perfect harmony, and where every detail tells your unique story.</p>
                        </div>
                        <div className="mission-stat-pair">
                            <div
                                className="glass-card mstat"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.8), rgba(26, 23, 20, 1)), url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400)`, backgroundSize: 'cover' }}
                            >
                                <div className="stat-num">1200+</div>
                                <p>Homes Transformed</p>
                            </div>
                            <div
                                className="glass-card mstat"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.8), rgba(26, 23, 20, 1)), url(https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400)`, backgroundSize: 'cover' }}
                            >
                                <div className="stat-num">14+</div>
                                <p>Years of Excellence</p>
                            </div>
                        </div>
                    </div>
                    <div className="mission-text">
                        <span className="badge">Who We Are</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>A Studio Built on <span className="text-gold">Passion</span></h2>
                        <p>Haanaak was born out of a simple but powerful belief: every person deserves a home that truly reflects who they are. We are a collective of architects, interior designers, artisans and project managers — all united by an obsession with beauty and craft.</p>
                        <p>From grand penthouses overlooking Chennai's skyline to intimate countryside retreats, we approach every project with the same level of dedication, curiosity and care.</p>
                        <Link to="/contact" className="btn-primary" id="about-consult-btn">Start Your Journey</Link>
                    </div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="values-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Our Values</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>What We <span className="text-gold">Stand For</span></h2>
                    </div>
                    <div className="grid-4">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="value-card glass-card"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.82), rgba(26, 23, 20, 0.95)), url(${v.img})`, backgroundSize: 'cover' }}
                            >
                                <div className="value-icon">{v.icon}</div>
                                <h4>{v.title}</h4>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="timeline-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Our Journey</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>A Decade of <span className="text-gold">Milestones</span></h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="tl-dot" />
                                <div
                                    className="tl-card glass-card"
                                    style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.9), rgba(26, 23, 20, 1)), url(${m.img})`, backgroundSize: 'cover' }}
                                >
                                    <span className="tl-year">{m.year}</span>
                                    <p>{m.event}</p>
                                </div>
                            </div>
                        ))}
                        <div className="timeline-line" />
                    </div>
                </div>
            </section>

            {/* ── Team ── */}
            <section className="team-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Meet the Team</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>The <span className="text-gold">Visionaries</span> Behind Haanaak</h2>
                        <p>Our team of world-class designers, architects and artisans brings your dream home to life with unmatched skill and passion.</p>
                    </div>
                    <div className="team-grid grid-4">
                        {team.map((m, i) => (
                            <div key={i} className="team-card glass-card">
                                <div
                                    className="team-avatar-box"
                                    style={{ backgroundImage: `url(${m.img})` }}
                                >
                                    <div className="team-avatar-overlay" />
                                </div>
                                <h4>{m.name}</h4>
                                <span className="team-role">{m.role}</span>
                                <div className="team-exp">
                                    <span className="badge">{m.yrs} exp.</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-banner">
                <div className="cta-banner-glow" />
                <div className="section-wrap cta-banner-inner">
                    <div>
                        <span className="badge">Let's Collaborate</span>
                        <h2>Ready to <span className="text-gold">Meet Us?</span></h2>
                        <p>Schedule a consultation and discover how Haanaak can transform your space.</p>
                    </div>
                    <div className="cta-banner-btns">
                        <Link to="/contact" className="btn-primary" id="about-cta-contact-btn">Get In Touch</Link>
                        <Link to="/design" className="btn-outline" id="about-cta-design-btn">See Our Work</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
