# Getting Started

Now that you have installed PyGerm, let's get started with creating your first game.

## Skeleton Code

```python
import pygerm

game = pygerm.Game()
game.run()
```

## Customizing Window Options
You can customize the window by passing in a dictionary of options to the `Game` constructor or setting them in the game object before it is run. For more details about their respective arguments, please take a look at the [Game](../docs/game-api/game.md), [GameConfig](../docs/game-api/game-config.md), and [RenderingConfig](../docs/game-api/rendering-config.md) classes.

Below is an example of how you could change your game title and resolution:
```python
import pygerm

game = pygerm.Game()

game.game_config = pygerm.GameConfig(game_title="Your Game Title")
game.rendering_config = pygerm.RenderingConfig(x_resolution=400, y_resolution=400)

game.run()
```
