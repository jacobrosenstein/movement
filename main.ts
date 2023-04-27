input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        right_angle = 170
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        basic.pause(500)
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
        basic.pause(right_angle)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    }
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
input.onButtonPressed(Button.B, function () {
    circle_time = 5000
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 100, 255)
    basic.pause(circle_time)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
let circle_time = 0
let right_angle = 0
Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
basic.forever(function () {
	
})
