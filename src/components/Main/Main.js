import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Timeline from '../Timeline';
import SkillBox from '../SkillBox';
import ProfileBox from '../ProfileBox';

import data from '../../data/davidchiu.json';
import styles from './Main.css';

/* Global styles */
import '../../styles/bootstrap.min.css';
import '../../styles/general.css';

class AppComponent extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <Grid >
                    <Row>
                        <Col xs={12} mdOffset={1} md={10}>
                            <ProfileBox languages={data.languages}
                                        desc={data.desc}
                                        name={data.name}
                                        position={data.position}
                                        email={data.email}/>

                            <SkillBox skills={data.skills}/>

                            <Timeline events={data.experience}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
