import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <div className={css.friends}>
            <ul className={css.friendlist}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.friends__item} key={id}>
                        <span className={`${css.friendstatus} ${ css[isOnline] }`}>
                            {isOnline}
                        </span>
                        <img className={css.avatar} src={avatar} alt={name} width='64' height='64'/>
                        <p className={css.friendsname}>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array
}