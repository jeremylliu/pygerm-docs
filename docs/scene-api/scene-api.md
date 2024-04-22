# Scene API
The Scene API is used to manage the game's scenes. The Scene module is a completely static class that can be called anywhere within your code base.

## getCurrent() -> str
The getCurrent() method will return the name of the current scene.

```python
import pygerm

scene = pygerm.Scene(name="scene1")
print(pygerm.Scene.getCurrent()) # Output: None as no scene has started yet
```

```python
import pygerm

class PrintCurrentScene(pygerm.Component):
    def onUpdate(self):
        print(pygerm.Scene.getCurrent()) # Output: scene1
        
actor1 = pygerm.Actor(name="actor1", components=[PrintCurrentScene()])
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

game = pygerm.Game(scene=scene1)
game.run()
```

## load(scene: Scene) -> None
The load() method will load the specified scene at the end of the current frame. This method should be called when you want to switch to a new scene.

```python
import pygerm

class LoadSceneOnSpace(pygerm.Component):
    def onUpdate(self):
        if pygerm.Input.getKeyDown('space') and not self.pressed:
            pygerm.Scene.load(scene2)

actor1 = pygerm.Actor(name="actor1", components=[LoadSceneOnSpace()])
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

scene2 = pygerm.Scene(name="scene2")

game = pygerm.Game(scene=scene1)
game.run()
```

## persist(actor: Actor) -> None
The persist() method will persist the specified actor across scene changes. This method should be called when you want an actor to persist across scene changes. This means that all state within the actor from the previous scene will be carried over.

```python
```python
import pygerm

class LoadSceneOnSpace(pygerm.Component):
    pressed = False
    
    def onStart(self):
        pygerm.Scene.persist(self.actor)
    
    def onUpdate(self):
        if pygerm.Input.getKeyDown('space') and not self.pressed:
            self.pressed = True # Prevents the scene from being loaded multiple times when persisted across scenes
            pygerm.Scene.load(scene2)

actor1 = pygerm.Actor(name="actor1", components=[LoadSceneOnSpace()])
scene1 = pygerm.Scene(name="scene1", actors=[actor1])

scene2 = pygerm.Scene(name="scene2")

game = pygerm.Game(scene=scene1)
game.run()
```

Warning: **Do not call the persist() method multiple times on the same actor. This will cause the actor to be duplicated across scenes.**
