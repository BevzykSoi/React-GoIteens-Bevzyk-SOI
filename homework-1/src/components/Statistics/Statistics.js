const Statistics = props => {
    return (
        <section className="statistics">
            <h2 className="title">{props.title}</h2>
            
            <ul className="stat-list">
                {props.stats.map((state) => (
                    <li className="item" key={state.id}>
                        <span className="label">{state.label}</span>
                        <span className="percentage">{state.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Statistics;