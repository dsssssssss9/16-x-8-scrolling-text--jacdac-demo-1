modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    matrix.clear()
    matrix.show()
    matrix.scrollText(
    "Button 1 ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Red)
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
    matrix.clear()
    matrix.show()
    matrix.scrollText(
    "Button 2",
    24,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
})
let matrix: SmartMatrix.Matrix = null
basic.showIcon(IconNames.Umbrella)
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
