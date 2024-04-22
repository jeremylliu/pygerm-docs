# Audio API
The Audio API is used to play audio assets in your game. The Audio module is a completely static class that can be called anywhere within your code base.

## play(channel: int, audio_path: str, loop: bool) -> None
The play() method will play an audio file on a specific channel. The channel is an integer that represents the audio channel that the audio will be played on. The audio_path is a string representing the path to the audio file. The loop is a boolean that determines if the audio will loop or not.

The valid channels are between 0-16

```python
```

## stop(channel: int) -> None
The stop() method will stop the audio on a specific channel. The channel is an integer that represents the audio channel that the audio will be stopped on.

```python
```

## setVolume(channel: int, volume: float) -> None
The setVolume() method will set the volume of the audio on a specific channel. The channel is an integer that represents the audio channel that the audio will be played on. The volume is a float that represents the volume of the audio. The volume is between 0 and 256.

```python
```
