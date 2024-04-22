# Application API
The Application API is used to control the game window and the game loop. The Application module is a completely static class that can be called anywhere within your code base.

## quit()
The quit() method will immediately close the game window and end the game loop. This method should be called when you want to exit the game.

```python
import pygerm

class ExitGameOnQ(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKey('q'):
            pygerm.Application.quit()

actor1 = pygerm.Actor(name="actor1", components={"1": ExitGameOnQ()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## sleep(ms: int)
The sleep() method will pause the game for the specified number of milliseconds. This method is useful for creating delays in your game or for managing events. Under the hood, this function calls thread.sleep().

```python
import pygerm

class SleepOnSpace(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKey('space'):
            print("Running Here")
            pygerm.Application.sleep(1000)

actor1 = pygerm.Actor(name="actor1", components={"1": SleepOnSpace()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## getFrame()
The getFrame() method will return the current frame number of the game. The frame number is counted from the start of the game loop until the game is exited.

```python
import pygerm

class PrintEveryTenFrames(pygerm.Component):
    def onUpdate(self):
        if pygerm.Application.getFrame() % 10 == 0:
            print("I am doing something every ten frames", pygerm.Application.getFrame())

actor1 = pygerm.Actor(name="actor1", components={"1": PrintEveryTenFrames()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## openUrl(url: str)
The openUrl() method will open the specified URL in the players default web browser. This method is useful for opening external links or web pages from within your game.

```python
import pygerm

class OpenUrlOnO(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKey('o'):
            pygerm.Application.openUrl("https://www.pygerm.jeremylliu.com")

actor1 = pygerm.Actor(name="actor1", components={"1": OpenUrlOnO()})
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```
