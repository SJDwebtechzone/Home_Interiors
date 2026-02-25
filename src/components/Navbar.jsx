import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Design', path: '/design' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'More', path: '/more' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                {/* Logo */}
                <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">Haanaak</span>
                </Link>

                {/* Desktop links */}
                <ul className="nav-links">
                    {navLinks.map(l => (
                        <li key={l.path}>
                            <NavLink
                                to={l.path}
                                end={l.path === '/'}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="nav-cta">
                    <Link to="/login" className="btn-outline nav-btn-login">Login</Link>
                    <Link to="/contact" className="btn-primary nav-btn-cta">Get Started</Link>
                </div>

                {/* Hamburger */}
                <button
                    className={`hamburger ${open ? 'open' : ''}`}
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile drawer */}
            <div className={`mobile-menu ${open ? 'active' : ''}`}>
                <ul>
                    {navLinks.map(l => (
                        <li key={l.path}>
                            <NavLink
                                to={l.path}
                                end={l.path === '/'}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                    <li><Link to="/login" onClick={() => setOpen(false)} className="mobile-login">Login</Link></li>
                    <li><Link to="/contact" onClick={() => setOpen(false)} className="mobile-cta btn-primary">Get Started</Link></li>
                </ul>
            </div>
        </nav>
    )
}
