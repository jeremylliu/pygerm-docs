# Camera API
The Camera API is used to control the camera in your game. The Camera module is a completely static class that can be called anywhere within your code base.

## setPosition(x: float, y: float) -> None
The setPosition() method will set the position of the camera in scene units. The x and y are floats that represent the position of the camera.

```python
```

## getPositionX() -> float
The getPositionX() method will return the x position of the camera in scene units.

```python
```

## getPositionY() -> float
The getPositionY() method will return the y position of the camera in scene units.

```python
```

## setZoom(zoom: float) -> None
The setZoom() method will set the zoom factor of the camera. The zoom is a float that represents the zoom factor of the camera.

Effectively, when you increase the zoom factor, the camera will zoom in on the scene. When you decrease the zoom factor, the camera will zoom out of the scene. In particular, if the zoom factor is 0.5, the camera will be zoomed out by a factor of 2 making 1 scene unit 50px instead of 100px.

```python
```

## getZoom() -> float
The getZoom() method will return the zoom factor of the camera.

```python
```
