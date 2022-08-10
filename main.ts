input.onButtonPressed(Button.A, function () {
    matrix.scrollText(
    "Framk",
    24,
    0,
    neopixel.colors(NeoPixelColors.Blue)
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
