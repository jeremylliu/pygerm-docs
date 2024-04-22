# Actor API

## create(actor: Actor) -> Actor
Instantiate an actor during runtime. The actor will be created at the end of the current frame. This actor will also be created with the lowest actor ID available, effectively making the newest added actor always run last.

```python
```

## destroy(actor: Actor) -> None
Destroy an actor during runtime. The actor will be destroyed at the end of the current frame. However, all components will immediately stop working.

```python
```

## find(name: str) -> Actor
Retrieve an actor by name. If the actor does not exist, None will be returned. If multiple actors share the same name, the first one sorted by actor key will be returned.

```python
```

## findAll(name: str) -> List\[Actor\]
Retrieve all actors by name. If no actors exist with the given name, an empty list will be returned.

```python
```
