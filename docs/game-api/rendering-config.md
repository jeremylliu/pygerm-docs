# RenderingConfig()

## Constructor

### RenderingConfig()
The default constructor for the RenderingConfig class. This constructor initializes all values to their default values of:

| Property     | Default Value             |
|--------------|---------------------------|
| x_resolution | 640                       |
| y_resolution | 360                       |
| zoomFactor   | 1.0                       |
| clearColor   | Color(255, 255, 255, 255) |

Warning: **The alpha value of clearColor is ignored by the rendering engine.**

### RenderingConfig(kwargs)
You can also initialize a RenderingConfig object with kwargs instead. This is useful for setting multiple values at once. The argument names are the same as the table listed above.

```python
rendering_config = RenderingConfig(x_resolution=800, y_resolution=600)
```

or

```python
rendering_config = RenderingConfig(zoomFactor=2.0, clearColor=Color(0, 0, 0, 255))
```

### RenderingConfig(filepath: str)
Additionally, each config class can be initialized with a filepath to a JSON file that contains the configuration values. This is useful for loading configuration values from a file. The JSON file should be formatted as follows:

```json
{
    "x_resolution": 800,
    "y_resolution": 600,
    "zoomFactor": 2.0,
    "clear_color_r": 55,
    "clear_color_g": 55,
    "clear_color_b": 55
}
```

Warning: **clear_color is replaced with clear_color_r, clear_color_g, and clear_color_b in ONLY the JSON file.**

## Read Write Properties
`x_resolution` The x resolution of the window in pixels. \
`y_resolution` The y resolution of the window in pixels. \
`zoomFactor` The zoom factor of the window. \
`clearColor` The color that the window is cleared to at the beginning of each frame.

```python
rendering_config = RenderingConfig()

rendering_config.x_resolution = 800
rendering_config.y_resolution = 600
rendering_config.zoomFactor = 2.0
rendering_config.clearColor = Color(0, 0, 0, 255)
```
