# Image API
The Image API is used to display visual assets in your game. The Image module is a completely static class that can be called anywhere within your code base.

## drawUI(kwargs) -> None
The drawUI() method will draw an image on the UI layer of the screen, which means it will always be drawn on top of everything else and will not be effected by the camera.

The arguments for this function are as follows:

- `image_path` The image to be drawn. This can be a string representing the path to the image file
- `x` The x pixel position of the image on the screen
- `y` The y pixel position of the image on the screen
- `color` The color of the image. This is a Color() type
- `sort_order` The order in which the image will be drawn. The higher the number, the later it will be drawn. This is useful for drawing images on top of each other.

```python
```

## draw(kwargs) -> None
The draw() method will draw an image on the game layer of the screen, which means it will be effected by the camera. Additionally, the position is measured in **scene units**, not pixels. For context, 1 scene unit at a zoom factor of 1 is equal to 100px.

The arguments for this function are as follows:

- `image_path` The image to be drawn. This can be a string representing the path to the image file
- `x` The x scene unit position of the image on the screen
- `y` The y scene unit position of the image on the screen
- `rotation` The rotation of the image in degrees
- `x_scale` The scale of the image in the x direction
- `y_scale` The scale of the image in the y direction
- `pivot_x` The x pivot point of the image (the point where it rotates around)
- `pivot_y` The y pivot point of the image (the point where it rotates around)
- `color` The color of the image. This is a Color() type
- `sort_order` The order in which the image will be drawn. The higher the number, the later it will be drawn. This is useful for drawing images on top of each other.

```python
```

## drawPixel(kwargs) -> None
The drawPixel() method will draw a single pixel on the UI layer of the screen, which means it will not affected by the camera. Additionally, the position is measured in **pixels** with the origin at the top left corner.

The arguments for this function are as follows:
- `x` The x pixel position of the pixel on the screen
- `y` The y pixel position of the pixel on the screen
- `color` The color of the pixel. This is a Color() type

```python
```
