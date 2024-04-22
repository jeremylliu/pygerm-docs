# Getting Started
Components are the building blocks of actors in your game. They are responsible for adding behavior to all of your actors and can be used to create complex interactions between actors as well. In this guide, you will learn how to create and use components in your game.

## Create a new component
To create a new component, you must inherit from the `Component` class. It will be impossible to append a component to an actor if it does not inherit from the `Component` class. Additionally, you cannot append a non-inherited class to an actor either.

To create a new component:
```python
import pygerm

class MyComponent(pygerm.Component):
    def onStart(self):
        pass
```

## Methods
The `Component` base class implements several lifecycle methods that you can override to add custom behavior to your component. These methods are called at different points in the game loop, and their order and execution will be described in the following sections.

These are the components lifecycle methods:
- `onStart()`
- `onUpdate()`
- `onLateUpdate()`
- `onDestroy()`

and, if you have a Rigidbody component attached to the actor, you can also use:
- `onCollisionEnter()`
- `onCollisionExit()`
- `onTriggerEnter()`
- `onTriggerExit()`

Additionally, it is only within these lifecycle methods (or functions called by these lifecycle methods) that gives you access to many of the API methods covered in this documentation. For example, you can only access the `Application` API methods from within a component's lifecycle method.

## Member Variables
Additionally, once you have created a component in an actor and it is running (or has finished running) its `onStart` lifecycle function, you will have access to a few member variables that are unique to the component. These member variables are:

`actor` The actor that the component is attached to. \
`enabled` A boolean that determines if the component is enabled or not. \
`key` A string that represents the key of the component in the actor's components dictionary.

`actor` in particular will be extremely helpful in accessing other components in the actor or the actor itself.

You can access these member variables like so, even without them being declared in your class.
```python
import pygerm

class MyComponent(pygerm.Component):
    def onStart(self):
        print(self.actor)
        print(self.enabled)
        print(self.key)

```

## Custom Constructor
If you are looking to create a custom constructor for your component, you can do so by overriding the `__init__` method. However, you must call the parent constructor with the `super()` method to ensure that the component is properly initialized. Without this, **your program will not run**.

```python
import pygerm

class MyComponent(pygerm.Component):
    def __init__(self, my_custom_variable):
        super().__init__()
        self.my_custom_variable = my_custom_variable

    def onStart(self):
        print(self.my_custom_variable)
```
