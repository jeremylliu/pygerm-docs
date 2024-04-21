# GameConfig()

## Constructor

### GameConfig()
The default constructor for the GameConfig class. This constructor initializes all values to their default values of:

| Property | Default Value |
|----------|---------------|
| game_title | "PyGerm Game" |

### GameConfig(kwargs)
You can also initialize a GameConfig object with a dictionary of values. This is useful for setting multiple values at once.

```python
game_config = GameConfig(game_title="My Game")
```

### GameConfig(filepath: str)
Additionally, each config class can be initialized with a filepath to a JSON file that contains the configuration values. This is useful for loading configuration values from a file. The JSON file should be formatted as follows:

```json
{
    "game_title": "My Game"
}
```

```python
game_config = GameConfig("path/to/config.json")
```

## Read Write Properties
In addition to the constructor, you can also set the following properties after the object has been created:

### game_title
The title of the game window.

```python
game_config = GameConfig()
game_config.game_title = "My Game"
```
