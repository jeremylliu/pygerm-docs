# Vec2()

## Constructor

### Vec2()
The default constructor for the Vec2 class. This constructor initializes all values to their default values of:

| Property | Default Value |
|----------|---------------|
| x | 0.0           |
| y | 0.0           |

### Vec2(x: float, y: float)
The parameterized constructor for the Vec2 class. This constructor initializes the x and y values to the given values.

### Vec2(kwargs)
You can also initialize a Vec2 object with kwargs instead. This is useful for setting multiple values at once. You can set as little or as many as you need. The argument names are the same as the table listed above.

## Read Write Values
`x` The x value of the vector. \
`y` The y value of the vector.

```python
vec = Vec2()
vec.x = 100
vec.y = 200
```
