radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(9000)
})
