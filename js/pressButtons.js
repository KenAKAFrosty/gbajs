const gameWindow = document.querySelector('canvas');

function pressButton(button){ 
    buttonToCode = { 
        'A':90,
        'B':88,
        'Start':13,
        'Select':220,
        'Up':38,
        'Down':40,
        'Left':37,
        'Right':39,
        'BumperL':65,
        'BumperR':83
    }

    if( ! buttonToCode[button] ) { return null };

    const simulatedEvent = {
        'keyCode': buttonToCode[button],
        'bubbles':true,
        'isTrusted':true,
    }

    const press = new KeyboardEvent('keydown', simulatedEvent);
    const release = new KeyboardEvent('keyup',simulatedEvent)

    gameWindow.dispatchEvent(press);
    setTimeout( ()=>{ gameWindow.dispatchEvent(release) }, 50 )
}