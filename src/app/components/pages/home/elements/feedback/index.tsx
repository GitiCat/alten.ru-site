import React from 'react';
import YandexMapBlock from './map/map';
import FeedbackFormBlock from './form/form';

const FeedbackElement: React.FunctionComponent = () => {
    const styles = {
        section: {
            paddingLeft: "0",
            paddingBottom: "0"
        } as React.CSSProperties,
        blockFirst: {
            paddingLeft: "0"
        } as React.CSSProperties,
        blockLast: {
            paddingLeft: "4.5%",
            paddingTop: "4.5%",
            paddingBottom: "4.5%"
        } as React.CSSProperties
    }
    
    return (
        <section className="container feedback flex" style={styles.section}>
            <div className="flex-block-2" style={styles.blockFirst}>
                <YandexMapBlock/>
            </div>
            <div className="flex-block-1" style={styles.blockLast}>
                <header className="big-title">
                    <h2>Обратная связь</h2>
                    <p>Есть вопросы? Свяжитесь с нами!</p>
                </header>
                <div className="content">
                    <FeedbackFormBlock/>
                </div>
            </div>
        </section>
    )
}

export default FeedbackElement;