import React from 'react';
import styles from './SkillBox.css';

/**
 * The skill box component
 */
export default function Skillbox({skills}) {
    return (
        <div className={styles.root}>
            {
                skills && Array.isArray(skills) && skills.map(skill => {
                    const classnames = styles({
                        normal: true,
                        [`${skill.type}`]: true
                    });
                    return <div key={skill.name} className={classnames}>
                        {skill.name}
                    </div>
                })
            }
        </div>
    );
}
