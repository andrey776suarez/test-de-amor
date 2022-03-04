input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (Math.randomBoolean()))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("" + (randint(0, 100)))
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
})
