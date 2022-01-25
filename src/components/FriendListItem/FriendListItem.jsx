import propTypes from "prop-types";
import styles from "./FriendListItem.module.css";
import defaultAvatar from "../../static/defaultUser.jpg";

const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={styles.item}>
            <span className={styles.status && isOnline ? styles.green : styles.red}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.defaultProps = {
    isOnline: false,
    avatar: defaultAvatar,
};

FriendListItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool,
};

export default FriendListItem;