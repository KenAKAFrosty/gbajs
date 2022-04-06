const gameWindow = document.querySelector('canvas');
const buttonPressQueue = [];
buttonToCode = {
    'a': 90,
    'b': 88,
    'start': 13,
    'select': 220,
    'up': 38,
    'down': 40,
    'left': 37,
    'right': 39,
    'leftbumper': 65,
    'rightbumper': 83
}


function pressButtons(buttonsArray) {
    const eventsArray = getEventsArray(buttonsArray);

    if (!eventsArray) {
        console.log("Found an invalid command. Please check your spelling.")
        return null
    };

    for (const event of eventsArray) {
        buttonPressQueue.push(event);
    }
    emptyQueueAndFireEvents();
}

function getEventsArray(buttonsArray) {
    let hasInvalidCommand = false;

    const eventsArray = buttonsArray.map(button => {
        const keyCode = buttonToCode[button.toLowerCase().trim()];
        if (keyCode === undefined) { hasInvalidCommand = true }

        const simulatedEvent = {
            keyCode,
            bubbles: true,
            isTrusted: true,
        }

        return simulatedEvent

    });

    if (hasInvalidCommand) { return null }
    else { return eventsArray }
}


function emptyQueueAndFireEvents() {
    console.log(JSON.parse(JSON.stringify(buttonPressQueue)));
    if (buttonPressQueue.length <= 0) { return null };

    const nextEvent = buttonPressQueue.shift();

    const press = new KeyboardEvent('keydown', nextEvent);
    const release = new KeyboardEvent('keyup', nextEvent);

    gameWindow.dispatchEvent(press);
    setTimeout(() => {
        gameWindow.dispatchEvent(release);
        setTimeout(() => { emptyQueueAndFireEvents() }, 10)
    }, 10)
}