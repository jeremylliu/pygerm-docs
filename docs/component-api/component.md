# Component()

## Lifecycle Methods
For every lifecycle method added to an actor and a scene, there is a set order on how they will be run. This order is set by a few rules:

1. The order of the actors in a scene will determine the order in which the actors' lifecycle methods are run.
2. Within each actor, each lifecycle method will be run in the order their key they are appended with in the constructor of an actor.

If you are wondering on how components and actors added on runtime will behave,
- Actors added on runtime will be appended at the end of the current list of actors. This means that the newest created actor will run last.
- Components added on runtime will be initialized with a key that starts with `r` and is followed by a number. This number is a global counter that increments every time a component is added on runtime.

Additionally, the order of the lifecycle methods is as follows:
1. `onStart()`
2. `onUpdate()`
3. `onLateUpdate()`
4. `onDestroy()`

### onStart() -> None
The `onStart()` method is called once when the component is first initialized. This method is useful for setting up the component's initial state.

In particular, if a Scene() is initialized with a component with onStart(), the onStart function will run before the first frame. However, if a component is initialized or added during runtime, the onStart function will run at beginning of the next frame, not the current frame.

### onUpdate() -> None
The `onUpdate()` method is called once every frame. This method is useful for updating the component's state every frame.

### onLateUpdate() -> None
The `onLateUpdate()` method is called once every frame after all `onUpdate()` methods have been called. This method is useful for updating the component's state after all other components have been updated.

### onDestroy() -> None
The `onDestroy()` method is called once when the component is destroyed. This method is useful for cleaning up any resources that the component may have created.
