import styles from "./Profile.module.css";
import propTypes from "prop-types";
import defaultAvatar from "../../static/defaultUser.jpg";

const Profile = props => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={props.avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{props.username}</p>
                <p className={styles.tag}>@{props.tag}</p>
                <p className={styles.location}>{props.location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{props.followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{props.views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{props.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.defaultProps = {
    avatar: defaultAvatar,
    location: "No location",
    followers: 0,
    views: 0,
    likes: 0,
}

Profile.propTypes = {
    avatar: propTypes.string,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string,
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
};

export default Profile;