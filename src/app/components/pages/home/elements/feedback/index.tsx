import React from 'react';
import YandexMapBlock from './map/map';
import FeedbackFormBlock from './form/form';

const FeedbackElement: React.FunctionComponent = () => {
    return (
        <div className="container feedback">
            <div className="block">
                <YandexMapBlock/>
            </div>
            <div className="block">
                <div className="big-title">
                    <h2>Обратная связь</h2>
                    <span>Есть вопросы? Свяжитесь с нами!</span>
                </div>
                <div className="content">
                    <FeedbackFormBlock/>
                </div>
            </div>
        </div>
    )
}

export default FeedbackElement;