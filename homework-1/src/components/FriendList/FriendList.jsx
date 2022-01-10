import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import styles from "./FriendList.module.css";
import propTypes from "prop-types";

const FriendList = props => {
    return (
        <ul className={styles.friendList}>
            {props.data.map((friend) => (
                <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}/>
            ))}
        </ul>
    );
};

FriendList.defaultProps = {
    data: [],
};

FriendList.propTypes = {
    data: propTypes.array,
};

export default FriendList;