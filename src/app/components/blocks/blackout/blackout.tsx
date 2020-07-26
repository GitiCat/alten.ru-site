import React from 'react';

const BlackoutBlock: React.FunctionComponent = () => {
    return (
        <div className="blackout"></div>
    )
}

const MemodBlackoutBlock = React.memo(BlackoutBlock);

const BlackoutState = (showing: boolean) => {
    var block: HTMLElement = document.querySelector('.blackout');
    var classes = block.classList;

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
    var body = document.querySelector('body');
    var classes = body.classList;

    if(isDisable)
        classes.add('disable-scroll');
    else
        classes.remove('disable-scroll');
}

export {
    MemodBlackoutBlock,
    BlackoutState
}