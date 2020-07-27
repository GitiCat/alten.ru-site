import React from 'react';

const BlackoutBlock: React.FunctionComponent = () => {
    return (
        <div className="blackout"></div>
    )
}

const MemodBlackoutBlock = React.memo(BlackoutBlock);

const BlackoutState = (showing: boolean) => {
    const block: HTMLElement = document.querySelector('.blackout');
    const classes = block.classList;

    if(showing) {
        classes.add('show');
        BodyScrollState(true);
    }
    else {
        classes.remove('show');
        BodyScrollState(false);
    }
}

const BodyScrollState = (isDisable: boolean) => {
    const body = document.querySelector('body');
    const classes = body.classList;

    if(isDisable)
        classes.add('disable-scroll');
    else
        classes.remove('disable-scroll');
}

export {
    MemodBlackoutBlock,
    BlackoutState
}