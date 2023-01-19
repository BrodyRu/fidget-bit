let rps = 0
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
