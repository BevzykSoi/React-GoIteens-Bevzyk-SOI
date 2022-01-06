import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = props => {
    return (
        <ul className={styles.friendList}>
            {props.data.map((friend) => (
                <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}/>
            ))}
        </ul>
    );
};

export default FriendList;