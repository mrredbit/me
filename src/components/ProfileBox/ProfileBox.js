import React from 'react';
import styles from './ProfileBox.css';
import profileImg from './images/david.svg';
import icoGithub from './icons/github.svg';
import icoLinkedin from './icons/linkedin.svg';

/**
 * The profile box component
 */
export default function ProfileBox({ name, desc, position, email, github, linkedin}) {
    return (
        <div className={styles.root}>
            <img className={styles.profileImg} src={profileImg}/>
            <h1 className={styles.profileName}>{name}</h1>
            <h2 className={styles.position}>{position}</h2>
            <a href={`mailto:${email}`} className={styles.email}>{email}</a>
            <div className={styles.socialNetworkContainer}>
                <a href={github} target="_blank"><img src={icoGithub} className={styles.socialNetworkIcon}/></a>
                <span className={styles.separator}>|</span>
                <a href={linkedin} target="_blank"><img src={icoLinkedin} className={styles.socialNetworkIcon}/></a>
            </div>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: desc }}/>
        </div>
    );
}
