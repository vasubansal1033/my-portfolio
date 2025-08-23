# 🎵 Audio Setup Instructions

Your portfolio now has a professional audio player in the top-right corner! Here's how to set it up properly.

## 📁 File Structure

```
portfolio/
├── public/
│   └── audio/
│       ├── README.md
│       └── [your-audio-files-here]
├── components/
│   └── AudioPlayer.tsx
```

## 🎯 Quick Setup

### Step 1: Add Your Audio File
Place your `littleroot_town.m4a` file (or any audio file) in the `/public/audio/` directory:

```bash
# Copy your audio file to the correct location
cp /path/to/your/littleroot_town.m4a public/audio/
```

### Step 2: Verify File Structure
Your directory should look like this:
```
public/
├── audio/
│   ├── littleroot_town.m4a  ← Your audio file here
│   └── README.md
├── next.svg
└── vercel.svg
```

## 🔧 Configuration Options

### Using a Different Audio File

If you want to use a different file, update the `AudioPlayer.tsx` component:

```tsx
<source src="/audio/your-file-name.mp3" type="audio/mpeg" />
```

### Supported Audio Formats

| Format | MIME Type | Browser Support | Recommended |
|--------|-----------|-----------------|-------------|
| MP3    | audio/mpeg | Excellent | ✅ Yes |
| M4A    | audio/mp4  | Very Good | ✅ Yes |
| WAV    | audio/wav  | Excellent | ⚠️ Large files |
| OGG    | audio/ogg  | Good | ⚠️ Limited Safari |

## 🎛️ Audio Player Features

Your audio player includes:

- ✅ **Autoplay** - Starts playing automatically when page loads
- ✅ **Smart Autoplay Handling** - Gracefully handles browser restrictions
- ✅ **Play/Pause** toggle with visual feedback
- ✅ **Volume/Mute** control
- ✅ **Auto-loop** for continuous playback
- ✅ **Volume set to 30%** to avoid being intrusive
- ✅ **Error handling** - hides if audio file is missing
- ✅ **Fallback audio** - uses online source if local file fails
- ✅ **Visual notifications** when autoplay is blocked
- ✅ **Smooth animations** with hover effects
- ✅ **Professional styling** matching your portfolio theme

## 🚀 Docker Support

The audio files will work automatically in Docker since they're in the `public` directory:

```bash
# Start your portfolio
./run-docker.sh

# Or using docker-compose
docker-compose up --build
```

## 🎨 Customization Options

### Change Audio Volume
Edit the volume in `AudioPlayer.tsx`:
```tsx
audioRef.current.volume = 0.3; // 30% volume (range: 0.0 - 1.0)
```

### Disable Auto-loop
```tsx
audioRef.current.loop = false; // Disable looping
```

### Change Player Position
Modify the positioning classes:
```tsx
className="fixed top-4 left-4 z-40" // Move to top-left
```

## 🔍 Troubleshooting

### Audio Not Playing?
1. **Check file location**: Ensure the audio file is in `/public/audio/`
2. **Verify file name**: Make sure the filename matches exactly (case-sensitive)
3. **Test file format**: Try converting to MP3 if using an exotic format
4. **Check browser console**: Look for audio loading errors
5. **File size**: Ensure the file isn't too large (< 10MB recommended)

### Browser Autoplay Policies
Modern browsers have restrictions on autoplay:
- **Chrome/Edge**: Autoplay works if user has interacted with the site before
- **Firefox**: Autoplay usually blocked for new visitors
- **Safari**: Strict autoplay blocking for media with audio
- **Fallback**: If autoplay is blocked, a notification appears prompting user interaction
- **User-initiated play**: Always works when user clicks the play button

### CORS Issues
If using external audio URLs, ensure they support CORS:
- Local files in `/public/` don't have CORS issues
- External URLs need proper CORS headers

## 📱 Mobile Considerations

The audio player is responsive and works on mobile devices:
- Touch-friendly button sizes
- Proper hover states on mobile
- Respects mobile browser audio policies

## 🎵 Recommended Audio Setup

For the best user experience:

1. **Use MP3 format** (best compatibility)
2. **Keep files under 5MB** for fast loading
3. **Use 128-192 kbps bitrate** for good quality/size balance
4. **Consider mono audio** for background music (smaller file size)
5. **Loop-friendly tracks** work best (no obvious start/end)

## 🛠️ Current Setup

Your AudioPlayer is configured to:
- **Autoplay**: Attempts to start playing automatically on page load
- **Primary source**: Load `/audio/littleroot_town.m4a`
- **Fallback source**: Use online audio if local file fails
- **Auto-hide**: If neither audio source works
- **Volume**: Set to 30% (non-intrusive)
- **Smart handling**: Shows notification if autoplay is blocked

## 🎯 Expected Behavior

1. **Page loads** → Audio player appears in top-right
2. **Audio loads** → Automatically attempts to start playing
3. **If autoplay works** → Music starts, play button shows pause icon
4. **If autoplay blocked** → Orange notification appears saying "Click to enable audio"
5. **User clicks play** → Music starts immediately

Just add your audio file to `/public/audio/littleroot_town.m4a` and it will autoplay on page load! 🎉
