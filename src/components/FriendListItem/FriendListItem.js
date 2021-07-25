import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImg from './default.jpg';

const FriendListItem = ({id, avatar, name, isOnline}) => (
<li className={styles.item} key={id}>
<span className={isOnline? styles.active:styles.disabled}></span>
<img className={styles.avatar} src={avatar} alt="Аватар користувача" width="48" />
        <p className={styles.name}>{name}</p>
</li>
);

FriendListItem.defaultProps = {
    avatar: defaultImg,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem;

