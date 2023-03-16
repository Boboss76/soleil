basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("" + (input.lightLevel()))
        basic.showLeds(`
            # . # . #
            . # # # .
            . # # # .
            . # # # .
            # . # . #
            `)
    } else {
        basic.showString("" + (input.lightLevel()))
        basic.showLeds(`
            . # # # #
            # . . . .
            # . . . .
            # . . . .
            . # # # #
            `)
    }
})
