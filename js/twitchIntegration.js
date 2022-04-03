const streamerName = "KenAKAFrosty"



async function startTwitchIntegration(){ 
    ComfyJS.onReward = (user, reward, cost, message, extra) => {
        handleRewardRedemption(user, reward, cost, message, extra)
    }

    ComfyJS.Init(streamerName, oAuthToken)
}

function handleRewardRedemption(user, reward, cost, message, extra) {
    console.log(user, reward, cost, message, extra)
    const rewardNameToButton = { 
        'Press Up 👆':'Up',
        'Press Left 👈':'Left',
        'Press Right 👉':'Right',
        'Press Down 👇':'Down',
        'Press A':'A',
        'Press B':'B',
        'Press Select':'Select',
        'Press Start':'Start',
        'Press Left Bumper':'BumperL',
        'Press Right Bumper':'BumperR'
    }

    pressButton(rewardNameToButton[reward])
}