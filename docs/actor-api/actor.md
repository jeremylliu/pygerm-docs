# Actor()

## Constructors

### Actor()
The default constructor of an Actor object creates a basic actor object with an empty list of components.

### Actor(name: str, components: dict\[Component\])
The parameterized constructor requires a name and a list of components to create an Actor object.

```python
import pygerm

class MyComponent(pygerm.Component):
    def onUpdate(self):
        pass

actor = pygerm.Actor("actor1", {"1": MyComponent(), "2": MyComponent()})
```}})
```

### Actor(kwargs)
You can also initialize an Actor object with kwargs. This is useful for setting a couple of values at once or making your code more verbose.

```python
actor = pygerm.Actor("actor1", {"1": MyComponent(), "2": MyComponent()})
```

## Read Write Properties
Additionally, if you choose to modify some of the configuration values after the constructor as been called (but before run() is called), you can do so by setting the following properties:

`name` The name of the actor. \
`components` The list of components in the actor.

```python
actor = pygerm.Actor()
actor.name = "actor1"
actor.components = actor = {"1": MyComponent(), "2": MyComponent()}
```

## Methods
These class methods are available for the Actor class. However, these methods will only work as intended when called in a component's lifecycle function like onStart or a later method.

Warning: **These methods will not work as intended if called in the constructor of a component.**

### getName() -> str
Returns the name of the actor.

```python
import pygerm

class MyComponent(pygerm.Component):
    def onUpdate(self):
        actor = self.actor
        print(actor.getName())

actor = pygerm.Actor("actor1", {"1": MyComponent()})
scene = pygerm.Scene("scene1", [actor])
game = pygerm.Game(scene=scene)
game.run()
```

### getID() -> int
Returns the internal ID of the actor. Guaranteed to be unique.

This ID number is what determines the order of actors in the scene. The lower the ID, the earlier the actor is updated and rendered in the game loop.

```python
import pygerm

class MyComponent(pygerm.Component):
    def onUpdate(self):
        actor = self.actor
        print(actor.getID()) # returns 0 since first actor in scene

actor = pygerm.Actor("actor1", {"1": MyComponent()})
scene = pygerm.Scene("scene1", [actor])
game = pygerm.Game(scene=scene)
game.run()
```

### getComponentByKey(key: str) -> Component
Queries the actor's components for a component its given key during initialization (the key of the dict). Returns `None` if no component is found.

If a component was initialized during runtime, its key is created based on the following pattern: \
`f'r{n}'` - where `r` stands for runtime-added and `n` is the number of times `AddComponent(type_name)` has been called in the entire program (`n` is a global integer counter, not one local to the actor).

```python
import pygerm

class OutputMessage(pygerm.Component):
    message = "???"
    def onStart(self):
        print(self.message) # will print "Hello, World!"

class ModifyOutputMessage(pygerm.Component):
    def onStart(self):
        actor = self.actor
        output_message = actor.getComponentByKey("2")
        output_message.message = "Hello, World!"

actor = pygerm.Actor("actor1", {"1": ModifyOutputMessage(), "2": OutputMessage()})
scene = pygerm.Scene("scene1", [actor])
game = pygerm.Game(scene=scene)
game.run()
```

### getComponent(type: StaticComponentClass) -> Component
Queries the actor's components for a component of the given type. If there are multiple of the same type, the first one sorted by component key will be returned. Returns `None` if no component is found.

### getComponents(type: StaticComponentClass) -> List\[Component\]
Queries the actor's components for all components of the given type. Returns an empty list if no components are found.

### addComponent(component: Component) -> Component
Adds a component to the actor. Returns a reference to the component that was added.

### removeComponent(component: Component) -> None
Removes a component from the actor, if it exists. This method requires the reference to the component that was added.
