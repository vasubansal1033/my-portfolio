# Audio Files

This directory contains audio files for the portfolio.

## Adding Your Music

1. Place your audio file (e.g., `littleroot_town.m4a`) in this directory
2. Supported formats: MP3, M4A, WAV, OGG
3. Keep file sizes reasonable for web usage (< 5MB recommended)

## Current Setup

The AudioPlayer component is configured to play: `littleroot_town.m4a`

To use a different file, update the `src` attribute in `components/AudioPlayer.tsx`:

```tsx
<audio
  ref={audioRef}
  src="/audio/your-audio-file.m4a"
  preload="auto"
/>
```

## Browser Compatibility

- **MP3**: Widely supported
- **M4A**: Good support in modern browsers
- **WAV**: Universal support but larger file sizes
- **OGG**: Good open-source alternative

## File Optimization Tips

1. Use compressed formats (MP3, M4A) for smaller file sizes
2. Consider 128kbps - 192kbps bitrate for web
3. Mono audio is sufficient for background music
4. Keep duration reasonable (2-3 minutes max for loops)
