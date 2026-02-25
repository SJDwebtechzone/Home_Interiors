import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Design.css'

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Outdoor', 'Dining']

const projects = [
    { title: 'The Ivory Suite', category: 'Living Room', style: 'Minimalist Luxury', size: 'large', accent: '#c9a84c', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800' },
    { title: 'Celestial Bedroom', category: 'Bedroom', style: 'Art Deco Revival', size: 'normal', accent: '#9c7a2c', img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800' },
    { title: 'Golden Hearth', category: 'Kitchen', style: 'Contemporary Classic', size: 'normal', accent: '#c9a84c', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800' },
    { title: 'Obsidian Office', category: 'Office', style: 'Executive Noir', size: 'large', accent: '#7a6a4a', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800' },
    { title: 'Pearl Dining Room', category: 'Dining', style: 'French Eclectic', size: 'normal', accent: '#c9a84c', img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800' },
    { title: 'The Veranda Club', category: 'Outdoor', style: 'Modern Tropical', size: 'normal', accent: '#6a8a5a', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800' },
    { title: 'Midnight Lounge', category: 'Living Room', style: 'Moody Contemporary', size: 'normal', accent: '#7a4a9a', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800' },
    { title: 'Rose Garden Retreat', category: 'Bedroom', style: 'Romantic Classic', size: 'normal', accent: '#c9a84c', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800' },
    { title: 'Nordic Kitchen', category: 'Kitchen', style: 'Scandinavian Warmth', size: 'large', accent: '#9a8a6a', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200' },
    { title: 'Zen Workspace', category: 'Office', style: 'Japanese Minimalism', size: 'normal', accent: '#6a7a6a', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800' },
    { title: 'Al Fresco Terrace', category: 'Outdoor', style: 'Mediterranean Luxe', size: 'normal', accent: '#9a8a4a', img: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800' },
    { title: 'The Grand Banquet', category: 'Dining', style: 'Opulent Classic', size: 'normal', accent: '#c9a84c', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200' },
]

const packages = [
    {
        name: 'Essence',
        price: '₹2.5L',
        desc: 'Perfect for single-room transformations with premium finishing.',
        features: ['1 Room Design', 'Mood Board', '2 Revision Rounds', 'Material Procurement', '30-Day Support'],
        popular: false,
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600'
    },
    {
        name: 'Signature',
        price: '₹7.5L',
        desc: 'Our most popular package — a complete home makeover experience.',
        features: ['Full Home Design', '3D Walkthrough', 'Unlimited Revisions', 'Full Procurement', 'Project Management', '90-Day Support'],
        popular: true,
        img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600'
    },
    {
        name: 'Prestige',
        price: 'Custom',
        desc: 'White-glove bespoke service for the most discerning clients.',
        features: ['Bespoke Everything', 'Dedicated Designer Duo', 'Art Curation', 'Luxury Sourcing', 'VIP After-Care', 'Annual Reviews'],
        popular: false,
        img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600'
    },
]

export default function Design() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All'
        ? projects
        : projects.filter(p => p.category === active)

    return (
        <div className="design-page page-top">

            {/* ── Hero ── */}
            <section
                className="page-hero noise"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.75), rgba(26, 23, 20, 0.85)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="section-wrap hero-content" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="hero-text anim-fade-up" style={{ alignItems: 'center', maxWidth: '800px' }}>
                        <span className="badge">Portfolio & Packages</span>
                        <h1 className="hero-heading">
                            Our <span className="text-gold">Design</span><br />
                            Universe
                        </h1>
                        <p className="hero-sub" style={{ maxWidth: '600px' }}>
                            Explore our curated portfolio of transformative spaces and discover the perfect design package to begin your own journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Filter Gallery ── */}
            <section className="gallery-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Portfolio</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Signature <span className="text-gold">Collections</span></h2>
                    </div>

                    {/* Filter pills */}
                    <div className="filter-bar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-pill ${active === cat ? 'active' : ''}`}
                                onClick={() => setActive(cat)}
                                id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="design-grid">
                        {filtered.map((p, i) => (
                            <div
                                key={i}
                                className={`design-card ${p.size === 'large' ? 'large' : ''}`}
                                style={{
                                    '--card-accent': p.accent,
                                    backgroundImage: `url(${p.img})`
                                }}
                            >
                                <div className="design-card-overlay" />
                                <div className="design-card-info">
                                    <span className="badge">{p.category}</span>
                                    <h4>{p.title}</h4>
                                    <p>{p.style}</p>
                                    <Link to="/contact" className="btn-outline dc-btn" id={`design-card-${i}`}>Enquire →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Packages ── */}
            <section className="packages-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Pricing</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Choose Your <span className="text-gold">Package</span></h2>
                        <p>Transparent pricing with no hidden surprises. Every package includes our signature consultation and design excellence.</p>
                    </div>
                    <div className="packages-grid">
                        {packages.map((pkg, i) => (
                            <div
                                key={i}
                                className={`package-card glass-card ${pkg.popular ? 'popular' : ''}`}
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.85), rgba(26, 23, 20, 0.95)), url(${pkg.img})`, backgroundSize: 'cover' }}
                            >
                                {pkg.popular && <div className="popular-tag">Most Popular</div>}
                                <div className="pkg-header">
                                    <h3>{pkg.name}</h3>
                                    <div className="pkg-price">{pkg.price}</div>
                                    <p className="pkg-desc">{pkg.desc}</p>
                                </div>
                                <hr className="gold" />
                                <ul className="pkg-features">
                                    {pkg.features.map((f, j) => (
                                        <li key={j}><span className="check">✦</span>{f}</li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={pkg.popular ? 'btn-primary' : 'btn-outline'}
                                    id={`pkg-cta-${i}`}
                                >
                                    Get Started
                                </Link>
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
                        <span className="badge">Not Sure Where to Start?</span>
                        <h2>Let's <span className="text-gold">Talk</span> Design</h2>
                        <p>Book a free 30-minute discovery call with one of our senior designers.</p>
                    </div>
                    <div className="cta-banner-btns">
                        <Link to="/contact" className="btn-primary" id="design-cta-btn">Book Free Call</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
