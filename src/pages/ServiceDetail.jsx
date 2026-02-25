import { useParams, Link } from 'react-router-dom'
import './ServiceDetail.css'

const servicesData = {
    'interior-design': {
        title: 'Interior Design',
        desc: 'Holistic design solutions that transform your vision into a living masterpiece.',
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200',
        features: ['Bespoke Floor Plans', '3D Photorealistic Renders', 'Material Selection', 'Aesthetic Balancing'],
        content: 'Our interior design service is the heartbeat of Haanaak. We don\'t just choose furniture; we curate emotions. Every corner is meticulously planned to ensure that your home is not just a residence, but a reflection of your soul.'
    },
    'space-planning': {
        title: 'Space Planning',
        desc: 'Optimizing every square inch for maximum flow, function, and feeling.',
        img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200',
        features: ['Circulation Analysis', 'Furniture Zoning', 'Efficiency Optimization', 'Ergonomic Layouts'],
        content: 'Effective space planning is the foundation of luxury. We analyze how you move and live, creating layouts that feel intuitive and effortless. Whether it\'s a grand hall or an intimate study, we make space work for you.'
    },
    'colour-consulting': {
        title: 'Colour Consulting',
        desc: 'The art of atmosphere through the perfect palette of light and hue.',
        img: 'https://images.unsplash.com/photo-1615529328329-92604660d1e9?w=1200',
        features: ['Psychological Analysis', 'Custom Paint Mixing', 'Lighting Integration', 'Swatch Testing'],
        content: 'Colour is the soul of a room. Our consultants use the science of light and psychology to curate palettes that evoke the exact mood you desire — from serene tranquility to vibrant energy.'
    },
    'furniture-curation': {
        title: 'Furniture Curation',
        desc: 'Sourcing world-class pieces that stand as functional works of art.',
        img: 'https://images.unsplash.com/photo-1616137422495-1e9e47e217c2?w=1200',
        features: ['Global Sourcing', 'Custom Carpentry', 'Upholstery Selection', 'Antique Integration'],
        content: 'We source furniture from the finest artisans globally. From Italian leather to local handcrafted wood, every piece is chosen for its quality, comfort, and timeless aesthetic value.'
    },
    'renovation-oversight': {
        title: 'Renovation Oversight',
        desc: 'Stress-free execution where we manage every tiny detail for you.',
        img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200',
        features: ['Vendor Management', 'Timeline Control', 'Quality Audits', 'Budget Tracking'],
        content: 'Renovation should be a joy, not a burden. Our project managers oversee every contractor and craftsman, ensuring your project is delivered on time, within budget, and to our exacting standards.'
    },
    'luxury-staging': {
        title: 'Luxury Staging',
        desc: 'Presenting your property in its most breathtaking possible light.',
        img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
        features: ['Aesthetic Styling', 'Art Curation', 'Scent & Lighting', 'Soft Furnishing'],
        content: 'Whether for a high-end sale or a special event, our staging service transforms spaces into irresistible experiences. We create "love at first sight" moments through expert styling.'
    }
}

export default function ServiceDetail() {
    const { id } = useParams()
    const data = servicesData[id] || servicesData['interior-design']

    return (
        <div className="service-detail-page page-top">
            {/* Header / Hero */}
            <section className="service-hero">
                <div className="page-side-decor left anim-fade-in"><img src={data.img} alt="decor" /></div>
                <div className="page-side-decor right anim-fade-in"><img src={data.img} alt="decor" /></div>

                <div className="section-wrap service-hero-inner anim-fade-up">
                    <span className="badge">Our Expertise</span>
                    <h1>{data.title.split(' ')[0]} <span className="text-gold">{data.title.split(' ')[1] || ''}</span></h1>
                    <p className="service-sub">{data.desc}</p>
                </div>
            </section>

            {/* Content */}
            <section className="service-content-section">
                <div className="section-wrap service-grid">
                    <div className="service-main-text anim-fade-up-d1">
                        <h2>The <span className="text-gold">Philosophy</span></h2>
                        <div className="gold-divider"><span /><i><span /></i><span /></div>
                        <p>{data.content}</p>
                        <div className="service-features-list">
                            {data.features.map(f => (
                                <div key={f} className="s-feature-item">
                                    <span className="check">✦</span> {f}
                                </div>
                            ))}
                        </div>
                        <Link to="/contact" className="btn-primary">Book Consultation ✦</Link>
                    </div>

                    <div className="service-visual anim-fade-up-d2">
                        <div className="service-img-frame glass-card">
                            <img src={data.img} alt={data.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="other-services-links">
                <div className="section-wrap">
                    <h3>Explore Other <span className="text-gold">Specialties</span></h3>
                    <div className="s-links-grid">
                        {Object.entries(servicesData).map(([slug, s]) => (
                            slug !== id && (
                                <Link key={slug} to={`/services/${slug}`} className="s-link-card glass-card">
                                    <h4>{s.title}</h4>
                                    <span>Learn More →</span>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
