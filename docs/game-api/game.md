# Game()

## Constructor

### Game()
The default constructor of a Game object creates a basic game object with a default GameConfig(), RenderingConfig(), and empty Scene(). For details on their initial values, please visit the pages for each of these classes.

```python
game = pygerm.Game()
```

### Game(GameConfig, RenderingConfig, Scene)
The parameterized constructor requires a GameConfig, RenderingConfig, and Scene object to create a Game object.

```python
game = pygerm.Game(GameConfig(), RenderingConfig(), Scene())
```

### Game(kwargs)

## Read Write Properties
Additionally, if you choose to modify some of the configuration values after the constructor as been called (but before run() is called), you can do so by setting the following properties:

`game_config` The GameConfig object that contains the game's configuration values. \
`rendering_config` The RenderingConfig object that contains the rendering configuration values. \
`scene` The Scene object that contains the game's starting scene


```python
game = pygerm.Game()
game.game_config = GameConfig(game_title="My Game")
game.rendering_config = RenderingConfig(x_resolution=800, y_resolution=600)
game.scene = Scene(name="initial_scene")
```


## Methods
### run()
The run() method is the main method that starts the game loop. This method should be called after the Game object has been created and configured.

```python
game = pygerm.Game()
game.run()
```

Warning: **This function does not return, even after the game terminates [pygerm.Application.quit](../application)**
