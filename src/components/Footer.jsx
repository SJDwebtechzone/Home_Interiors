import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Design', path: '/design' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'More', path: '/more' },
]

const services = [
    { label: 'Interior Design', slug: 'interior-design', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200' },
    { label: 'Space Planning', slug: 'space-planning', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=200' },
    { label: 'Colour Consulting', slug: 'colour-consulting', img: 'https://images.unsplash.com/photo-1615529328329-92604660d1e9?w=200' },
    { label: 'Furniture Curation', slug: 'furniture-curation', img: 'https://images.unsplash.com/photo-1616137422495-1e9e47e217c2?w=200' },
    { label: 'Renovation Oversight', slug: 'renovation-oversight', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=200' },
    { label: 'Luxury Staging', slug: 'luxury-staging', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200' },
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-glow" />

            {/* Side decorative images to fill empty space */}
            <div className="footer-side-decor left">
                <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800" alt="Interior Detail" />
            </div>
            <div className="footer-side-decor right">
                <img src="https://images.unsplash.com/photo-1615873968403-89e068628265?auto=format&fit=crop&q=80&w=800" alt="Decor Detail" />
            </div>

            <div className="section-wrap footer-inner">

                {/* Brand col */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="logo-icon">✦</span>
                        <span className="logo-text">Haanaak</span>
                    </div>
                    <p className="footer-tagline">
                        Redefining how you live, one exquisite space at a time. Luxury interior design for the modern connoisseur.
                    </p>
                    <div className="footer-socials">
                        {['ig', 'fb', 'tw', 'pt'].map(s => (
                            <a key={s} href="#" className="social-pill" aria-label={s}>{s === 'ig' ? '◈' : s === 'fb' ? '◉' : s === 'tw' ? '◍' : '◎'}</a>
                        ))}
                    </div>
                </div>

                {/* Quick links */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Quick Links</h4>
                    <ul>
                        {quickLinks.map(l => (
                            <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Services</h4>
                    <ul>
                        {services.map((s, i) => (
                            <li key={i}>
                                <Link to={`/services/${s.slug}`}>{s.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Contact Us</h4>
                    <div className="footer-contact-list">
                        <p>📍 6/c, 2nd Street, Krishna Nagar, Kallakurichi</p>
                        <p>📞 +91 6369974246</p>
                        <p>✉️ haanaak2@gmail.com</p>
                    </div>
                    <div className="footer-newsletter">
                        <p className="newsletter-label">Get design inspiration:</p>
                        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                            <input id="footer-email" type="email" placeholder="Your email" />
                            <button type="submit" className="btn-primary" id="newsletter-subscribe-btn">→</button>
                        </form>
                    </div>
                </div>
            </div>

            <hr className="gold" />

            <div className="footer-bottom section-wrap">
                <p>© {new Date().getFullYear()} Haanaak. All rights reserved. Crafted with elegance.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </footer>
    )
}
