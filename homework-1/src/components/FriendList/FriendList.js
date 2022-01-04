import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = props => {
    return (
        <ul className="friend-list">
            {props.data.map((friend) => (
                <FriendListItem key={friend.id}  {...friend}/>
            ))}
        </ul>
    );
};

export default FriendList;