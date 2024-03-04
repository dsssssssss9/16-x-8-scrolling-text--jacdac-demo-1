// Demo to show Jacdac inputs used to control output on a 32*8 WS2812b type matrix
// 
// Uses following extension to output scrolling text to the display...
// 
// https://github.com/Shorts1999/pxt-smartmatrix
// 
// AT THE MOMENT THE EXTENSION ONLY WORKS WITH "COLUMN ZIG ZAG " PATTERN MATRIX
// 
// The extension author is working on adding other types of display layout , static text, lines/boxes etc )
// 
// ---------------------------------------------------------------
// 
// This demo uses 2 Jacdac buttons ( BUTTON1 , BUTTON2)
// 
// Press BUTTON1 to display
// 
// Press BUTTON2 to display a message
// 
// 
// 
// You can also press A on Micro:Bit to display a message
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(1)
    matrix.clear()
    matrix.show()
    matrix.scrollText(
    "Button 1 Pressed     ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Green)
    )
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    matrix.scrollText(
    "Frank Rules O.K.!!! ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Blue)
    )
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(2)
    matrix.scrollText(
    "Button 2  Pressed     ",
    24,
    0,
    neopixel.colors(NeoPixelColors.Red)
    )
})
let matrix: SmartMatrix.Matrix = null
basic.showIcon(IconNames.Yes)
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
