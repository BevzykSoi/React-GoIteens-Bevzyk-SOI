import styles from "./Profile.module.css";
import propTypes from "prop-types";

const Profile = ({avatar, username, tag, location, followers, views, likes}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.defaultProps = {
    avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
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