import { Link } from 'react-router-dom'
import './Home.css'

const features = [
    { icon: '◈', title: 'Bespoke Interiors', desc: 'Every design is one-of-a-kind, tailored precisely to your vision, lifestyle, and personality.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600' },
    { icon: '◎', title: 'Premium Materials', desc: 'We source only the finest materials — from Italian marbles to handcrafted brasswork.', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600' },
    { icon: '✦', title: 'End-to-End Service', desc: 'From concept to completion, we manage every detail so you can simply enjoy the transformation.', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600' },
    { icon: '◉', title: 'Timeless Aesthetics', desc: 'Our designs transcend trends, creating spaces that remain elegant for decades to come.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600' },
]

const portfolioItems = [
    { label: 'The Ivory Suite', style: 'Minimalist Luxury', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800' },
    { label: 'Golden Hearth', style: 'Contemporary Classic', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800' },
    { label: 'Celestial Bedroom', style: 'Art Deco Revival', img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800' },
    { label: 'The Veranda Club', style: 'Modern Tropical', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800' },
    { label: 'Obsidian Office', style: 'Executive Noir', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800' },
    { label: 'Pearl Dining Room', style: 'French Eclectic', img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800' },
]

const stats = [
    { num: '1200+', label: 'Projects Completed', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600' },
    { num: '98%', label: 'Client Satisfaction', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600' },
    { num: '14+', label: 'Years of Mastery', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600' },
    { num: '42', label: 'Design Awards', img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600' },
]

const testimonials = [
    {
        quote: 'Haanaak completely transformed our home into something straight out of a design magazine. We are speechless every single morning.',
        name: 'Priya & Arjun Mehra',
        role: 'Chennai Penthouse',
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600'
    },
    {
        quote: 'The attention to detail is unmatched. They brought our vague dream to life with precision, elegance and utter perfection.',
        name: 'Rohan Singhania',
        role: 'Delhi Villa',
        img: 'https://images.unsplash.com/photo-1615529328329-92604660d1e9?w=600'
    },
    {
        quote: 'Our office now reflects the premium brand we aspire to be. Clients comment on it every single visit. Worth every rupee.',
        name: 'Nadia Khanna',
        role: 'Founder, NKL Group',
        img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600'
    },
]

const processSteps = [
    { num: '01', title: 'Discovery Call', desc: 'We understand your vision, lifestyle, budget and timeline through an in-depth consultation.', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600' },
    { num: '02', title: 'Concept Design', desc: 'Our designers craft a bespoke mood board, 3D renders and material palette for your approval.', img: 'https://images.unsplash.com/photo-1615529328329-92604660d1e9?w=600' },
    { num: '03', title: 'Procurement', desc: 'We source, curate and procure every element — furniture, fixtures, art and accessories.', img: 'https://images.unsplash.com/photo-1616137422495-1e9e47e217c2?w=600' },
    { num: '04', title: 'Transformation', desc: 'Our skilled artisans and project managers execute the design flawlessly — on time, every time.', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600' },
]

export default function Home() {
    return (
        <div className="home page-top">

            {/* ── Hero ── */}
            <section
                className="hero noise"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.75), rgba(26, 23, 20, 0.85)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-content section-wrap" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="hero-text anim-fade-up" style={{ alignItems: 'center', maxWidth: '800px' }}>
                        <span className="badge">Est. 2011 · Chennai, India</span>
                        <h1 className="hero-heading">
                            Where <span className="text-gold">Luxury</span><br />
                            Meets <em>Home</em>
                        </h1>
                        <p className="hero-sub" style={{ maxWidth: '600px' }}>
                            Haanaak is India's premier home design studio — crafting exceptional living spaces that marry elegance, comfort and personality into one breathtaking whole.
                        </p>
                        <div className="hero-btns anim-fade-up-d2">
                            <Link to="/design" className="btn-primary" id="hero-explore-btn">Explore Designs ✦</Link>
                            <Link to="/about" className="btn-outline" id="hero-about-btn">Our Story</Link>
                        </div>
                    </div>
                </div>
                <div className="hero-scroll-hint">
                    <span>Scroll to explore</span>
                    <div className="scroll-line" />
                </div>
            </section>
            <section className="stats-section">
                <div className="section-wrap stats-grid">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="stat-item glass-card"
                            style={{
                                backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.82), rgba(26, 23, 20, 0.92)), url(${s.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="stat-num">{s.num}</div>
                            <p>{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Features / Why Haanaak ── */}
            <section className="features-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Why Haanaak</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Designed for the <span className="text-gold">Extraordinary</span></h2>
                        <p>We don't just decorate—we create environments that resonate with your soul and elevate your everyday existence.</p>
                    </div>
                    <div className="features-grid grid-4">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="feature-card glass-card"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.85), rgba(26, 23, 20, 0.92)), url(${f.img})` }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Portfolio Preview ── */}
            <section className="portfolio-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Portfolio</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Our <span className="text-gold">Signature</span> Spaces</h2>
                        <p>Each project is a masterwork — explore a curated selection of our most celebrated transformations.</p>
                    </div>
                    <div className="portfolio-grid">
                        {portfolioItems.map((item, i) => (
                            <div
                                key={i}
                                className="portfolio-card anim-fade-up"
                                style={{ backgroundImage: `url(${item.img})` }}
                            >
                                <div className="portfolio-card-overlay">
                                    <span className="badge">{item.style}</span>
                                    <h4>{item.label}</h4>
                                    <Link to="/design" className="btn-outline pcard-btn" id={`portfolio-card-${i}`}>View Details →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/design" className="btn-primary" id="view-all-designs-btn">View All Designs</Link>
                    </div>
                </div>
            </section>

            {/* ── Process ── */}
            <section className="process-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">How It Works</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Our <span className="text-gold">Process</span></h2>
                        <p>A seamless journey from dream to reality — structured, transparent and deeply personal.</p>
                    </div>
                    <div className="process-steps">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="process-step glass-card"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.9), rgba(26, 23, 20, 0.95)), url(${step.img})`, backgroundSize: 'cover' }}
                            >
                                <div className="process-num">{step.num}</div>
                                <div className="process-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                                {i < processSteps.length - 1 && <div className="process-connector" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="testimonials-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Testimonials</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>What Our <span className="text-gold">Clients</span> Say</h2>
                    </div>
                    <div className="testimonials-grid grid-3">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="testimonial-card glass-card"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.9), rgba(26, 23, 20, 0.95)), url(${t.img})`, backgroundSize: 'cover' }}
                            >
                                <div className="t-quote-icon">"</div>
                                <p className="t-quote">{t.quote}</p>
                                <div className="t-author">
                                    <div className="t-avatar">{t.name[0]}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="cta-banner">
                <div className="cta-banner-glow" />
                <div className="section-wrap cta-banner-inner">
                    <div>
                        <span className="badge">Ready to Begin?</span>
                        <h2>Transform Your Space <span className="text-gold">Today</span></h2>
                        <p>Schedule a complimentary consultation and take the first step toward your dream home.</p>
                    </div>
                    <div className="cta-banner-btns">
                        <Link to="/contact" className="btn-primary" id="cta-consult-btn">Book Consultation</Link>
                        <Link to="/design" className="btn-outline" id="cta-gallery-btn">View Gallery</Link>
                    </div>
                </div>
            </section>

        </div >
    )
}
