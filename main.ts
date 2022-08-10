modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    Encoder = modules.rotaryEncoder1.position()
    matrix.clear()
    matrix.show()
    matrix.scrollText(
    "" + convertToText(Encoder) + " ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
})
myModules.button3.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.scrollText(
    "Button 3 ",
    64,
    0,
    neopixel.colors(NeoPixelColors.Purple)
    )
})
input.onButtonPressed(Button.A, function () {
    matrix.scrollText(
    "Frank",
    24,
    0,
    neopixel.colors(NeoPixelColors.Blue)
    )
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.scrollText(
    "Button 2 ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Red)
    )
})
let matrix: SmartMatrix.Matrix = null
let Encoder = 0
basic.showIcon(IconNames.Umbrella)
Encoder = 0
matrix = SmartMatrix.create(
DigitalPin.P2,
32,
8,
NeoPixelMode.RGB
)
matrix.Brightness(32)
matrix.clear()
matrix.show()
basic.forever(function () {
	
})
