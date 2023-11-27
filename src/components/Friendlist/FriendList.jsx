import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <div className="friends">
            <ul className="friendlist">
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className="friends__item" key={id}>
                        {/* Detalisation? */}
                        <span className={{ isOnline }}>
                            {isOnline}
                        </span>
                        <img className="avatar" src={avatar} alt={name} />
                        <p className="friendsname">{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array
}