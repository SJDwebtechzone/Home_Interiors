import { useState } from 'react'
import './Contact.css'

const contactInfo = [
    { icon: '📍', label: 'Studio Address', value: '6/c, 2nd Street, Krishna Nagar, Kallakurichi' },
    { icon: '📞', label: 'Phone', value: '+91 6369974246' },
    { icon: '✉️', label: 'Email', value: 'haanaak2@gmail.com' },
    { icon: '⏰', label: 'Working Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM' },
]

const services = [
    'Interior Design Consultation',
    'Full Home Makeover',
    'Single Room Redesign',
    'Commercial Spaces',
    'Renovation Oversight',
    'Virtual Design Session',
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    const [sent, setSent] = useState(false)

    const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const submit = async e => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                setSent(true)
                setTimeout(() => setSent(false), 5000)
                setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
            } else {
                const errorData = await response.json();
                alert(`Server Error: ${errorData.error || 'The server is busy. Please try again later.'}`);
            }
        } catch (err) {
            console.error(err);
            alert(`Connection Error: Could not reach the email server. Make sure the server is running on port 5000.`);
        }
    }

    return (
        <div className="contact-page page-top">

            {/* ── Hero ── */}
            <section
                className="page-hero noise"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.75), rgba(26, 23, 20, 0.85)), url('https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="section-wrap hero-content" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="hero-text anim-fade-up" style={{ alignItems: 'center', maxWidth: '800px' }}>
                        <span className="badge">Let's Connect</span>
                        <h1 className="hero-heading">
                            Begin Your <span className="text-gold">Journey</span><br />
                            With Haanaak
                        </h1>
                        <p className="hero-sub" style={{ maxWidth: '600px' }}>
                            Whether you have a clear vision or just a feeling, we'd love to hear from you. Your dream space starts with a single conversation.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Contact Grid ── */}
            <section className="contact-section">
                <div className="section-wrap contact-grid">

                    {/* Left info panel */}
                    <div className="contact-info-panel">
                        <div className="glass-card info-card">
                            <span className="badge">Our Details</span>
                            <h3>Come Visit <span className="text-gold">Us</span></h3>
                            <div className="gold-divider"><span /><i /><span /></div>
                            <div className="info-items">
                                {contactInfo.map((c, i) => (
                                    <div key={i} className="info-item">
                                        <span className="info-icon">{c.icon}</span>
                                        <div>
                                            <strong>{c.label}</strong>
                                            <p>{c.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="map-placeholder glass-card">
                            <div className="map-inner">
                                <div className="map-pin">📍</div>
                                <p>Haanaak Studio<br /><span>Kallakurichi, Tamil Nadu</span></p>
                            </div>
                            <div className="map-grid-overlay" />
                        </div>
                    </div>

                    {/* Right form */}
                    <div className="contact-form-panel glass-card">
                        <span className="badge">Send a Message</span>
                        <h3>Book a <span className="text-gold">Consultation</span></h3>
                        <div className="gold-divider"><span /><i /><span /></div>

                        {sent && (
                            <div className="success-toast">
                                ✦ Thank you! We'll reach out within 24 hours.
                            </div>
                        )}

                        <form className="contact-form" onSubmit={submit} id="contact-form">
                            <div className="form-row">
                                <div className="field-wrap">
                                    <label htmlFor="contact-name">Full Name</label>
                                    <input id="contact-name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handle} required />
                                </div>
                                <div className="field-wrap">
                                    <label htmlFor="contact-email">Email Address</label>
                                    <input id="contact-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handle} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="field-wrap">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input id="contact-phone" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handle} />
                                </div>
                                <div className="field-wrap">
                                    <label htmlFor="contact-service">Service Interested In</label>
                                    <select id="contact-service" name="service" value={form.service} onChange={handle}>
                                        <option value="">Select a service</option>
                                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="contact-budget">Approximate Budget</label>
                                <select id="contact-budget" name="budget" value={form.budget} onChange={handle}>
                                    <option value="">Select budget range</option>
                                    <option>Under ₹2 Lakhs</option>
                                    <option>₹2 – 5 Lakhs</option>
                                    <option>₹5 – 15 Lakhs</option>
                                    <option>₹15 – 50 Lakhs</option>
                                    <option>₹50 Lakhs+</option>
                                </select>
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="contact-message">Tell Us About Your Space</label>
                                <textarea id="contact-message" name="message" placeholder="Describe your dream space, current challenges, or simply say hello..." value={form.message} onChange={handle} />
                            </div>
                            <button type="submit" className="btn-primary submit-btn" id="contact-submit-btn">
                                Send Message ✦
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="faq-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">FAQ</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Common <span className="text-gold">Questions</span></h2>
                    </div>
                    <div className="faq-grid">
                        {[
                            { q: 'How long does a typical project take?', a: 'Most single-room projects take 4–8 weeks. Full home makeovers typically run 3–6 months, depending on scope and procurement timelines.' },
                            { q: 'Do you work outside Mumbai?', a: 'Absolutely! We have studios in Mumbai, Delhi, Bangalore, Dubai and Singapore. We also offer virtual design consultations worldwide.' },
                            { q: 'What is included in the initial consultation?', a: 'The first meeting is a free 30-minute discovery call where we understand your vision, budget and timeline — with zero obligations.' },
                            { q: 'Can I stay in my home during renovation?', a: 'This depends on the project scope. We work with you to create a phased plan that minimises disruption to your daily life.' },
                        ].map((f, i) => (
                            <div key={i} className="faq-item glass-card">
                                <h4>✦ {f.q}</h4>
                                <p>{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
