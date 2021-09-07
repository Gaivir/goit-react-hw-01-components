import React from "react";
import PropTypes from "prop-types";
import defaultImg from "./default.jpg";
import styles from "./Profile.module.css";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        width="480"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.lable}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styles.lable}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li>
        <span className={styles.lable}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
