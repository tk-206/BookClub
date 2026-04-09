import { columns } from "../../../data/mock/DummyData"

export default function HomeFeatures() {
    return (
        <section className='home-features'>
            <div className='features-header'>
                <div className='home-features-title'>FEATURES</div>
                <h2 className='home-features-title_desc'>
                    책과 사람을 잇는<br/>
                    <em>모든 것</em>
                </h2>
            </div>
            <div className='feature-body'>
                {columns.map((c) => (
                    <div key={c.title} className='feature-card'>
                        <span className='feature-num'>{c.num}</span>
                        <span className='feature-emoji'>{c.emoji}</span>
                        <div className='feature-title'>{c.title}</div>
                        <div className='feature-desc'>{c.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}