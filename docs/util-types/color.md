# Color()

## Constructor

### Color()
The default constructor for the Color class. This constructor initializes all values to their default values of:

| Property | Default Value |
|----------|---------------|
| r        | 0             |
| g        | 0             |
| b        | 0             |
| a        | 255           |

### Color(r: int, g: int, b: int, a: int)
Parameterized Constructor for the Color class. This constructor initializes all values to the values passed in.

```python
color = Color(100, 200, 33, 255)
```

### Color(kwargs)
You can also initialize a Color object with kwargs instead. This is useful for setting multiple values at once. You can set as little or as many as you need. The argument names are the same as the table listed above.

```python
color = Color(r=100, g=200, b=33, a=255)
```


## Read Write Values
`r` The red value of the color. \
`g` The green value of the color. \
`b` The blue value of the color. \
`a` The alpha value of the color.

```python
color = Color()
color.b = 255
color.a = 100
```
