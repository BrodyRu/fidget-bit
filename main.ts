input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoUp, function () {
    rps = randint(1, 2)
    if (rps == 1) {
        basic.showString("Heads")
    } else if (rps == 2) {
        basic.showString("Tails")
    }
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
    question = 0
})
input.onButtonPressed(Button.AB, function () {
    question = 1
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A B G A F G C ", 98)
})
input.onGesture(Gesture.Shake, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("Scissors")
    } else if (rps == 2) {
        basic.showString("Paper")
    } else if (rps == 3) {
        basic.showString("Rock")
    }
})
let rps = 0
let question = 0
question = 0
basic.forever(function () {
    if (question == 1) {
        basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `,10)
basic.pause(100)
        basic.clearScreen()
    }
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.clearScreen()
})
