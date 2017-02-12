import React from 'react';
import styles from './ProfileBox.css';
import profileImg from './images/david.svg';

/**
 * The profile box component
 */
export default function ProfileBox({ name, desc, position, email}) {
    return (
        <div className={styles.root}>
            <img className={styles.profileImg} src={profileImg}/>
            <h1 className={styles.profileName}>{name}</h1>
            <h2 className={styles.position}>{position}</h2>
            <a href={`mailto:${email}`} className={styles.email}>{email}</a>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }}/>
        </div>
    );
}
