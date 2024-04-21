# Installation

Let's install PyGerm in simply 2 commands.

## Getting Started
PyGerm is a Python package that allows you to create games using many popular libraries. However, a couple of these libraries require a few additional steps to install before pip can do the rest.

## Installing Dependencies
To get started, you will need to install some dependencies to get PyGerm up and running. If you have these dependencies already installed in the listed below, you can simply skip this step and move on to the next one.

#### Dependency List
- CMake
- SDL2
- SDL2_image
- SDL2_ttf
- SDL2_mixer

### MacOS
```bash
$ brew install cmake sdl2 sdl2_image sdl2_ttf sdl2_mixer
```

### Ubuntu / WSL
```bash
$ sudo apt-get install cmake libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev libsdl2-mixer-dev
```

## Installing PyGerm
Then, once you have the dependencies installed, you can simply install PyGerm using pip:
```bash
$ pip install pygerm
```

and get started with 

```python
import pygerm

pygerm.Game().run()
```
