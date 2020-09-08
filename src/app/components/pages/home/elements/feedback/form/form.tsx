import React from 'react';

const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    const isNotNull = element.value != '' ? true : false;

    if(isNotNull) element.classList.add('notnull')
    else element.classList.remove('notnull')
}

const FeedbackFormBlock: React.FunctionComponent = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">
                    Ваше имя
                    <input onChange = {onChangeEvent} type="text" name="name" autoComplete='off' required/>
                    <div className="selector"></div>
                </label>
            </div>
            <div>
                <label htmlFor="email">
                    Электронная почта
                    <input onChange = {onChangeEvent} type="email" name="email" autoComplete='off' required/>
                    <div className="selector"></div>
                </label>
            </div>
            <div>
                <label htmlFor="tel">
                    Телефон
                    <input onChange = {onChangeEvent} type="tel" name="tel" autoComplete='off'/>
                    <div className="selector"></div>
                </label>
            </div>
            <div>
                <label htmlFor="text">
                    Ваш вопрос
                    <textarea name="text" required></textarea>
                </label>
            </div>
            <button type="submit" className='_contained dark'>Отправить</button>
        </form>
    )
}

export default FeedbackFormBlock;