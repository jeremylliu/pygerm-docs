# Text API
The Text API is used to display text in your game. The Text module is a completely static class that can be called anywhere within your code base.

## draw(kwargs) -> None
The draw() method will draw text on the IO layer of the screen, with its position is measured in **pixels**.

The arguments for this function are as follows:
- `text` The text to be drawn. This can be a string
- `x` The x pixel position of the text on the screen
- `y` The y pixel position of the text on the screen
- `font` The font of the text. This is a currently a filepath to a .ttf file
- `size` The size of the text
- `color` The color of the text. This is a Color() type

```python
```
