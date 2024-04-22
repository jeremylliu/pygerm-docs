# Input API

The Input API is used to get keyboard and mouse from the player. The Input module is a completely static class that can be called anywhere within your code base.

Some keys like spacebar are represented as strings. The mouse buttons are represented as integers. Here is a table outlining all the custom mappings.

| Key             | String Representation |
|-----------------|-----------------------|
| Up Arrow Key    | "up"                  |
| Down Arrow Key  | "down"                |
| Left Arrow Key  | "left"                |
| Right Arrow Key | "right"               |
| Escape          | "escape"              |
| Left Shift      | "lshift"              |
| Right Shift     | "rshift"              |
| Left Control    | "lctrl"               |
| Right Control   | "rctrl"               |
| Left Alt        | "lalt"                |
| Right Alt       | "ralt"                |
| Tab             | "tab"                 |
| Return          | "return"              |
| Enter           | "enter"               |
| Escape          | "escape"              |
| Backspace       | "backspace"           |
| Delete          | "delete"              |
| Insert          | "insert"              |
| Space           | "space"               |

The rest are simply represented by their character value. For example, the "a" key is represented by "a". There are no uppercase or lowercase distinctions.

## getKey(key: str) -> bool
Returns `True` if the key is just pressed or is being pressed, `False` otherwise.

```python
import pygerm

class PrintOnSpace(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKey('space'):
            print("Spacebar is pressed on ", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintOnSpace()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getKeyDown(key: str) -> bool
Returns `True` if the key is just pressed this frame, `False` otherwise.

```python
import pygerm

class PrintOnSpace(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKeyDown('space'):
            print("Spacebar is just pressed on frame", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintOnSpace()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getKeyUp(key: str) -> bool
Returns `True` if the key is just released this frame, `False` otherwise.

```python
import pygerm

class PrintOnSpace(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKeyUp('space'):
            print("Spacebar is just released on frame", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintOnSpace()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getMousePosition() -> Vec2()
Returns the current mouse position as a Vec2 object. The x and y value are represented in **pixels**, with the origin at the top left corner of the window.

```python
import pygerm

class PrintMousePosition(pygerm.Component):
    def onUpdate(self):
        print(pygerm.Input.getMousePosition())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintMousePosition()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getMouseButton(button: int) -> bool
Returns `True` if the mouse button is being pressed, `False` otherwise.

| Button | Integer Representation |
|--------|------------------------|
| Left   | 1                      |
| Middle | 2                      |
| Right  | 3                      |

```python
import pygerm

class PrintMousePress(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getMouseButton(1):
            print("Left mouse button is pressed on frame", pygerm.Application.getFrame())
        if pygerm.Input.getMouseButton(2):
            print("Middle mouse button is pressed on frame", pygerm.Application.getFrame())
        if pygerm.Input.getMouseButton(3):
            print("Right mouse button is just pressed on frame", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintMousePress()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getMouseButtonDown(button: int) -> bool
Returns `True` if the mouse button is just pressed this frame, `False` otherwise. The mouse int representation is the same as the `getMouseButton()` function.

```python
import pygerm

class PrintMouseDown(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getMouseButtonDown(1):
            print("Left mouse button is down on frame", pygerm.Application.getFrame())
        if pygerm.Input.getMouseButtonDown(2):
            print("Middle mouse button is down on frame", pygerm.Application.getFrame())
        if pygerm.Input.getMouseButtonDown(3):
            print("Right mouse button is down on frame", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintMouseDown()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getMouseButtonUp(button: int) -> bool
Returns `True` if the mouse button is just released this frame, `False` otherwise. The mouse int representation is the same as the `getMouseButton()` function.

```python
import pygerm

class PrintMouseUp(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getMouseButtonUp(1):
            print("Left mouse button is down on frame", pygerm.Application.getFrame())
        if pygerm.Input.getMouseButtonUp(2):
            print("Middle mouse button is down on frame", pygerm.Application.getFrame())
        if pygerm.Input.getMouseButtonUp(3):
            print("Right mouse button is down on frame", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintMouseUp()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getMouseScrollDelta() -> float
Returns the scroll delta of the mouse wheel. The value is positive if the wheel is scrolled up and negative if the wheel is scrolled down.

```python
import pygerm

class PrintMouseScroll(pygerm.Component):
    def onUpdate(self):
        print(pygerm.Input.getMouseScrollDelta())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintMouseScroll()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```
