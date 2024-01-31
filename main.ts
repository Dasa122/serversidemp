input.onButtonPressed(Button.A, function () {
    radio.sendString("fuck")
})
radio.onReceivedValue(function (name, value) {
    if (name == "request") {
        let PlayerIDs: number[] = []
        serial.writeLine("" + value + " is trying to join...")
        PlayerIDs.push(value)
    } else if (name == "moveUp") {
    	
    } else {
    	
    }
})
radio.setGroup(144)
datalogger.mirrorToSerial(true)
basic.forever(function () {
    led.plotBrightness(0, 0, 255)
    led.plotBrightness(0, 1, 50)
})
