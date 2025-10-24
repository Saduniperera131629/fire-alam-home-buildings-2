smarthonIoTBit.onWifiConnect(function (ipAddress, deviceId) {
    smarthonIoTBit.setWifi("TP-link network", "20742")
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
    music.ringTone(294)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
smarthonHome.readDht11(DigitalPin.P14)
neZha.setMotorSpeed(neZha.MotorList.M4, 100)
smarthonHome.turnMotor(1023, AnalogPin.P16)
basic.forever(function () {
	
})
