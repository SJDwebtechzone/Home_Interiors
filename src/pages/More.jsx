import { Link } from 'react-router-dom'
import './More.css'

const blogPosts = [
    { tag: 'Trends', title: '2025 Interior Design Trends That Are Redefining Luxury', date: 'Feb 10, 2025', read: '5 min read', excerpt: 'From earthy palettes and curved furniture to biophilic design and jewel-toned accents — here is what is defining luxury spaces in 2025.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' },
    { tag: 'Guide', title: 'How to Choose the Perfect Colour Palette for Your Home', date: 'Jan 25, 2025', read: '7 min read', excerpt: 'Colour is the soul of a space. Learn how our designers approach colour selection to create depth, warmth and personality.', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800' },
    { tag: 'Insight', title: 'The Art of Mixing Vintage and Contemporary Design', date: 'Jan 12, 2025', read: '6 min read', excerpt: 'Discover the principles that make old and new coexist beautifully, creating spaces with story, character and timeless appeal.', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=600' },
    { tag: 'Trends', title: 'Biophilic Design: Bringing Nature Into Luxury Homes', date: 'Dec 20, 2024', read: '4 min read', excerpt: 'Natural materials, indoor greenery and organic forms — learn how bringing nature indoors elevates both aesthetic and wellbeing.', img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600' },
    { tag: 'Guide', title: 'Small Spaces, Big Impact: Luxury Design for Compact Homes', date: 'Dec 5, 2024', read: '8 min read', excerpt: 'Limited square footage doesn\'t mean limited beauty. Our experts share strategies for making every inch feel intentional and grand.', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600' },
    { tag: 'Story', title: 'Behind the Design: The Ivory Suite Project', date: 'Nov 18, 2024', read: '10 min read', excerpt: 'A behind-the-scenes look at one of our most celebrated projects — from the initial brief to the final, breathtaking reveal.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
]

const resources = [
    { icon: '📐', title: 'Room Planner Guide', desc: 'Download our free PDF guide to planning your room layout like a professional designer.', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800' },
    { icon: '🎨', title: 'Colour Palette Kit', desc: 'A curated set of premium colour palettes handpicked by our lead designers.', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600' },
    { icon: '📚', title: 'Design Vocabulary', desc: 'Demystify design jargon — a comprehensive glossary from Art Deco to Wabi-Sabi.', img: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600' },
    { icon: '💡', title: 'Lighting Bible', desc: 'The definitive guide to layering light, from ambient to accent, in any space.', img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=600' },
]

const awards = [
    { year: '2024', name: 'Architectural Digest AD50', org: 'Architectural Digest India', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400' },
    { year: '2023', name: 'Best Luxury Studio Award', org: 'India Design Excellence Awards', img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=400' },
    { year: '2022', name: 'Elle Décor A-List', org: 'Elle Décor India', img: 'https://images.unsplash.com/photo-1541604193435-22442431bdca?w=400' },
    { year: '2021', name: 'Top Interior Firm', org: 'Condé Nast Traveller', img: 'https://images.unsplash.com/photo-1615529328329-92604660d1e9?w=400' },
    { year: '2019', name: 'Rising Luxury Brand', org: 'Forbes India 30 Under 30', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400' },
    { year: '2017', name: 'Best Design Studio', org: 'India Design Excellence Awards', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400' },
]

const pressLogos = ['Vogue', 'Forbes', 'Elle Décor', 'AD India', 'Times of India', 'Condé Nast']

export default function More() {
    return (
        <div className="more-page page-top">

            {/* ── Hero ── */}
            <section
                className="page-hero noise"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.7), rgba(26, 23, 20, 0.8)), url('https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=1600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="section-wrap hero-content" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="hero-text anim-fade-up" style={{ alignItems: 'center', maxWidth: '800px' }}>
                        <span className="badge">Explore More</span>
                        <h1 className="hero-heading">
                            Stories, Resources<br />
                            & <span className="text-gold">Recognition</span>
                        </h1>
                        <p className="hero-sub" style={{ maxWidth: '600px' }}>
                            Dive deeper into the world of Haanaak — design insights, curated resources, press features and award-winning work.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Blog ── */}
            <section className="blog-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Design Journal</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Ideas &amp; <span className="text-gold">Inspiration</span></h2>
                        <p>Curated insights on interior design, lifestyle and the art of beautiful living from our team of experts.</p>
                    </div>
                    <div className="blog-grid">
                        {blogPosts.map((post, i) => (
                            <article key={i} className={`blog-card glass-card ${i === 0 ? 'featured' : ''}`}>
                                <div
                                    className="blog-img-box"
                                    style={{ backgroundImage: `url(${post.img})` }}
                                >
                                    <div className="blog-img-overlay" />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="badge">{post.tag}</span>
                                        <span className="blog-date">{post.date} · {post.read}</span>
                                    </div>
                                    <h4>{post.title}</h4>
                                    {i === 0 && <p>{post.excerpt}</p>}
                                    <a href="#" className="blog-read-link" id={`blog-post-${i}`}>Read Article →</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Resources ── */}
            <section className="resources-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Free Resources</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Design <span className="text-gold">Toolkit</span></h2>
                        <p>Complimentary tools and guides to help you understand, plan and communicate your design vision.</p>
                    </div>
                    <div className="grid-4">
                        {resources.map((r, i) => (
                            <div
                                key={i}
                                className="resource-card glass-card"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.88), rgba(26, 23, 20, 0.95)), url(${r.img})` }}
                            >
                                <div className="resource-icon">{r.icon}</div>
                                <h4>{r.title}</h4>
                                <p>{r.desc}</p>
                                <a href="#" className="btn-outline resource-btn" id={`resource-${i}`}>Download Free →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Awards ── */}
            <section className="awards-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">Recognition</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Awards &amp; <span className="text-gold">Accolades</span></h2>
                    </div>
                    <div className="awards-grid">
                        {awards.map((a, i) => (
                            <div
                                key={i}
                                className="award-item glass-card"
                                style={{ backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.92), rgba(26, 23, 20, 0.98)), url(${a.img})`, backgroundSize: 'cover' }}
                            >
                                <div className="award-year">{a.year}</div>
                                <div className="award-info">
                                    <strong>{a.name}</strong>
                                    <span>{a.org}</span>
                                </div>
                                <div className="award-icon">✦</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Press ── */}
            <section className="press-section">
                <div className="section-wrap">
                    <div className="section-head">
                        <span className="badge">As Seen In</span>
                        <div className="gold-divider"><span /><i /><span /></div>
                        <h2>Press &amp; <span className="text-gold">Media</span></h2>
                    </div>
                    <div className="press-logos">
                        {pressLogos.map((l, i) => (
                            <div key={i} className="press-logo glass-card">
                                <span>{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Newsletter ── */}
            <section className="newsletter-section">
                <div className="section-wrap newsletter-inner">
                    <div className="nl-glow" />
                    <div className="nl-text">
                        <span className="badge">Stay Inspired</span>
                        <h2>Join the <span className="text-gold">Haanaak Circle</span></h2>
                        <p>Receive curated design inspiration, exclusive studio updates, and early access to new collections — delivered monthly.</p>
                    </div>
                    <form className="nl-form" onSubmit={e => e.preventDefault()} id="newsletter-form">
                        <input type="email" id="nl-email" placeholder="Your email address" />
                        <button type="submit" className="btn-primary" id="nl-submit-btn">Subscribe ✦</button>
                    </form>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-banner">
                <div className="cta-banner-glow" />
                <div className="section-wrap cta-banner-inner">
                    <div>
                        <span className="badge">Ready?</span>
                        <h2>Let's Create <span className="text-gold">Together</span></h2>
                        <p>Start your design journey with a free consultation today.</p>
                    </div>
                    <div className="cta-banner-btns">
                        <Link to="/contact" className="btn-primary" id="more-cta-btn">Book Consultation</Link>
                        <Link to="/design" className="btn-outline" id="more-gallery-btn">View Designs</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
