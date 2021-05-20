// 最高記録を表示する
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (Keep))
    basic.pause(500)
    basic.clearScreen()
})
// Aボタンで経過時間を確認
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Time))
    basic.pause(500)
    // 10秒未満なら残念顔
    if (Time < 10) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    // 10秒以上30秒未満なら小笑い顔
    if (Time >= 10 && Time < 30) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    // 30秒以上60秒未満なら笑い顔
    if (Time >= 30 && Time < 60) {
        basic.showLeds(`
            # # # # #
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    // 60秒以上なら驚き顔→笑い顔
    if (Time >= 60) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # . # #
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
    }
    basic.pause(500)
    basic.clearScreen()
})
// 本体を逆さにするとカウント開始
// 戻すとカウントストップ
input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        Time += 1
        basic.pause(1000)
    }
})
// Bボタンでカウントをリセットする
// 新記録なら「↑」を表示して保存し、そうでなければ「×」を表示する
input.onButtonPressed(Button.B, function () {
    if (Max == 0 || Time > Keep) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Max = 1
        Keep = Time
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
    }
    basic.showNumber(0)
    basic.pause(500)
    basic.clearScreen()
    Time = 0
})
let Max = 0
let Keep = 0
let Time = 0
Time = 0
Keep = 0
