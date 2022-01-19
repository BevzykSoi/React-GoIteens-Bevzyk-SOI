import styles from "./Statistics.module.css";
import propTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            
            <ul className={styles.statList}>
                {stats.map((state) => (
                    <li className={styles.item} key={state.id} style={{backgroundColor: state.color}}>
                        <span className={styles.label}>{state.label}</span>
                        <span className={styles.percentage}>{state.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
    stats: []
};

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.array,
}

export default Statistics;