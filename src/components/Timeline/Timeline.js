import React from 'react';
import styles from './Timeline.css';
import VisibilitySensor from 'react-visibility-sensor';
/**
 * The timeline component
 */

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: props.events
        };
    }

    render() {
        const events = this.state.events;
        return (
            <div className={styles.root}>
                <div className={styles.lineEnd}/>
                {
                    events && Array.isArray(events) && events.map((event)=> {
                        const contentStyle = styles({
                            content: true,
                            fadedIn: event.isShown
                        });
                        return (<div key={event.time} className={styles.event}>
                                <div className={styles.node}>
                                    <div className={styles.innerNode}/>
                                </div>
                                <VisibilitySensor active={!event.isShown}
                                                  scrollDelay={0}
                                                  onChange={this.onInOutViewport.bind(this, event.time)}
                                                  partialVisibility scrollCheck
                                                  intervalCheck>
                                    <div className={contentStyle}>
                                        <h2 className={styles.contentTitle}
                                            dangerouslySetInnerHTML={{__html: event.title}}/>
                                        <h3 className={styles.contentSubtitle}
                                            dangerouslySetInnerHTML={{__html: event.subtitle}}/>
                                        <h4 className={styles.date} dangerouslySetInnerHTML={{__html: event.time}}/>
                                        <p className={styles.desc} dangerouslySetInnerHTML={{__html: event.desc}}/>
                                        <div className={styles.tags}>
                                            {
                                                event.tags && Array.isArray(event.tags) && event.tags.map(tag => {
                                                    return <div key={tag} className={styles.tag}>
                                                        {tag}
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </VisibilitySensor>
                            </div>
                        )
                    })
                }
                <div className={styles.lineEnd}/>
            </div>
        );
    }

    onInOutViewport(id, isVisible) {
        if (isVisible) {
            this.setState({
                events: this.state.events.map(event=> {
                    if (event.time === id) {
                        event.isShown = isVisible;
                    }
                    return event;
                })
            });
        }
    }

}

export default Timeline;
