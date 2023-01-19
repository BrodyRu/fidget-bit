def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    basic.show_leds("""
        # # # # #
                # # # # #
                . . # # #
                . . # # #
                . # # # #
    """)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_forever():
    pass
basic.forever(on_forever)
