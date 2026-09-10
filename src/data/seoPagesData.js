export const SEO_PAGES = [
  {
    slug: 'voice-recorder-iphone',
    path: '/voice-recorder-iphone/',
    title: 'Simple Voice Recorder for iPhone and iPad | Aurec',
    metaDescription: 'Aurec is a fast, distraction-free voice recorder for iPhone and iPad. Record voice memos and ideas in lossless WAV or lightweight M4A with complete offline privacy.',
    keywords: 'simple voice recorder iphone, voice recorder ipad, wav voice recorder ios, offline voice memo app, clean audio recorder iphone',
    h1: 'Simple Voice Recorder for iPhone and iPad',
    badge: 'Fast & Private Voice Recording',
    heroSubtitle: 'Record instantly. When inspiration strikes, open the app and tap record. Add tracks or edit later only when you need to.',
    heroImage: {
      src: '/screenshots/iphone/recorder.png',
      alt: 'Aurec simple voice recorder screen showing one-tap recording and live audio meters on iPhone',
      width: 1320,
      height: 2868,
      device: 'iphone',
    },
    technicalSpecs: [
      { label: 'Recording Formats', value: 'Lossless WAV & M4A (AAC)' },
      { label: 'Audio Depth', value: '16-bit, 24-bit, 32-bit float' },
      { label: 'Export Options', value: 'WAV, M4A, and MP3' },
      { label: 'Privacy Model', value: '100% Offline & On-Device' },
    ],
    guideSections: [
      {
        heading: 'Start Recording in One Second',
        paragraphs: [
          'When an idea flashes through your mind or an interview begins, you cannot afford to wait through splash screens, account logins, or cluttered menus. Aurec opens immediately to a clean recording screen with large timecode and live level meters.',
          'Press record, capture your thoughts, and stop whenever you are done. The app stays out of your way and focuses entirely on capturing clear sound without delay.',
        ],
      },
      {
        heading: 'Lossless WAV Quality with Flexible MP3 Export',
        paragraphs: [
          'Most default voice memo apps compress audio aggressively into low-bitrate files. Aurec captures true uncompressed WAV at up to 48 kHz / 32-bit float, preserving full acoustic dynamics for musical sketches, rehearsals, and podcast interviews.',
          'If storage space is a priority, you can switch the recording format to efficient M4A. When it is time to share your recording, Aurec lets you export directly as an MP3, M4A, or original WAV file straight to iOS Files, AirDrop, or messaging apps.',
        ],
      },
      {
        heading: 'Organize Takes into Sessions — With Zero Cloud Tracking',
        paragraphs: [
          'Scattered voice recordings quickly turn into an unsearchable mess. Aurec groups your recordings into tidy sessions with customizable names and timestamps, making it easy to archive songwriting demos or classroom lectures.',
          'Crucially, Aurec respects your privacy. All audio files remain stored locally on your device. There are no user accounts, no analytics tracking your audio, and no mandatory cloud subscriptions.',
          'Need to cut dead air after recording? You can jump straight into Aurec’s <a href="/audio-editor-iphone/" style="color: var(--accent-color); text-decoration: underline;">built-in audio editor</a> to trim your file, or use <a href="/overdub-app-iphone/" style="color: var(--accent-color); text-decoration: underline;">overdub recording</a> to add vocal harmonies over your initial memo.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Instant One-Tap Capture',
        description: 'Zero delay between having a thought and preserving it. Open the app and tap record immediately.',
      },
      {
        title: 'Lossless WAV & M4A Formats',
        description: 'Record in studio-grade uncompressed WAV for maximum fidelity, or choose M4A for everyday storage savings.',
      },
      {
        title: 'Session-Based Organization',
        description: 'Group related voice takes into structured sessions instead of an endless, chaotic list.',
      },
      {
        title: 'Completely Private & Offline',
        description: 'Never uploads audio to third-party servers. No user account registration or internet connection required.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Launch and Record',
        description: 'Open the app and tap the red record button to immediately capture speech, song ideas, or ambient sound.',
      },
      {
        step: '02',
        title: 'Name and Group',
        description: 'Assign your take to a dedicated session folder with custom names, dates, and color tags.',
      },
      {
        step: '03',
        title: 'Share or Edit',
        description: 'Trim the start and end in the waveform editor, or export as MP3, M4A, or WAV via AirDrop and iOS Files.',
      },
    ],
    faq: [
      {
        q: 'What audio formats can I record in Aurec?',
        a: 'Aurec records directly in uncompressed WAV (16-bit, 24-bit, or 32-bit float) for maximum fidelity, as well as AAC/M4A for lightweight voice memos. You can also export your finished takes as MP3 files for quick sharing.',
      },
      {
        q: 'Do I need to create an account or subscribe to use Aurec?',
        a: 'No. Aurec requires no account creation, no email sign-up, and no subscription to record. The app works completely offline on your iPhone and iPad.',
      },
      {
        q: 'Can I edit my voice memos after recording?',
        a: 'Yes. Aurec includes an onboard waveform editor that lets you trim silence, cut sections, and split tracks without needing a computer.',
      },
      {
        q: 'Can I layer additional tracks on top of a voice memo later?',
        a: 'Yes. Unlike typical voice memo apps, Aurec allows you to turn any existing recording into a base track and layer new tracks over it using overdubbing.',
      },
    ],
  },
  {
    slug: 'multitrack-recorder-iphone',
    path: '/multitrack-recorder-iphone/',
    title: 'Multitrack Recorder for iPhone and iPad | Aurec',
    metaDescription: 'Record multiple audio tracks on iPhone and iPad without a heavy DAW. Layer vocals and instruments, adjust volume and mute/solo, and export clean WAV stems.',
    keywords: 'multitrack recorder iphone, multitrack recording ipad, simple mobile daw, layer audio tracks ios, export wav stems iphone',
    h1: 'Multitrack Recorder for iPhone and iPad',
    badge: 'Lightweight Multitrack Studio',
    heroSubtitle: 'Capture layered song ideas without getting bogged down in complex DAW menus. Record instantly, add tracks when inspiration calls, and export clean stems.',
    heroImage: {
      src: '/screenshots/iphone/multitrack.png',
      alt: 'Aurec multitrack recorder interface showing multiple layered audio tracks and volume faders on iPhone',
      width: 1320,
      height: 2868,
      device: 'iphone',
    },
    technicalSpecs: [
      { label: 'Track Management', value: 'Multi-Layer Audio Timeline' },
      { label: 'Mixing Controls', value: 'Mute, Solo, Volume & Balance' },
      { label: 'Input Routing', value: 'Built-in Mic & USB Interface Channels' },
      { label: 'Stems Export', value: 'Time-Aligned WAV Files & Mixdowns' },
    ],
    guideSections: [
      {
        heading: 'Multitrack Recording Without the Bloat',
        paragraphs: [
          'Traditional digital audio workstations on iPad and desktop are packed with thousands of features: software synths, complex MIDI piano rolls, automation lanes, and plugin routing matrices. While powerful, they can kill creative momentum when all you want to do is layer two vocals and an acoustic guitar.',
          'Aurec takes the opposite approach. It is an intuitive voice and audio recorder that expands into a multi-layer workspace only when you need it. You can lay down a guide track, arm a new layer, and stack harmonies in seconds.',
        ],
      },
      {
        heading: 'Independent Track Controls and Input Selection',
        paragraphs: [
          'Every track in your Aurec session operates independently. You can adjust individual track volume levels, mute guide tracks during playback, and isolate specific takes with the Solo button to check for pitch or timing nuances.',
          'When you connect <a href="/usb-audio-interface-ipad/" style="color: var(--accent-color); text-decoration: underline;">compatible class-compliant audio interfaces</a>, Aurec lets you assign specific hardware input channels to individual tracks—such as recording a vocal mic on Input 1 and a guitar pickup on Input 2 simultaneously.',
        ],
      },
      {
        heading: 'Exporting Rough Mixes or Studio-Ready Stems',
        paragraphs: [
          'Once your arrangement is recorded, you can listen back to the balanced rough mix directly inside Aurec and export it as an MP3 or M4A file to send to collaborators.',
          'When you are ready to take the project into desktop software like Logic Pro, Reaper, or Pro Tools, Aurec exports all layers as time-aligned, uncompressed WAV stems. Simply drag and drop the stems onto your computer timeline, and every track will align with sample-level accuracy.',
          'Learn more about stacking takes in our <a href="/overdub-app-iphone/" style="color: var(--accent-color); text-decoration: underline;">overdub recording guide</a> or explore <a href="/record-guitar-and-vocals-iphone/" style="color: var(--accent-color); text-decoration: underline;">how to record guitar and vocals</a> step by step.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Dedicated Layer Workspace',
        description: 'View and manage audio layers in a clear, touch-friendly horizontal timeline without DAW complexity.',
      },
      {
        title: 'Mute, Solo & Volume Balance',
        description: 'Fine-tune playback levels and isolate individual tracks with one tap for quick monitoring.',
      },
      {
        title: 'Hardware Channel Assignment',
        description: 'Assign specific microphone or instrument inputs when using supported external USB audio interfaces.',
      },
      {
        title: 'Synchronized Stem Export',
        description: 'Export separated, time-aligned uncompressed WAV stems ready for any desktop mixing environment.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Lay Down the Foundation',
        description: 'Record your initial guide rhythm track or chord progression using the built-in mic or audio interface.',
      },
      {
        step: '02',
        title: 'Layer Additional Tracks',
        description: 'Put on headphones, create a new layer, and record lead lines, vocals, or percussion in lock-step.',
      },
      {
        step: '03',
        title: 'Balance and Export',
        description: 'Balance track volumes, solo takes to inspect performances, and export the mix or full WAV stems.',
      },
    ],
    faq: [
      {
        q: 'Is Aurec a replacement for Logic Pro or GarageBand?',
        a: 'No. Aurec is intentionally designed as a fast, lightweight audio recorder and sketchpad. It does not include MIDI instruments, software synths, or heavy third-party plugins. Instead, it focuses on fast audio capture, overdubbing, and stem export without setup friction.',
      },
      {
        q: 'Can I export separated tracks to mix on my computer?',
        a: 'Yes. Aurec can export all session tracks as individual, time-aligned uncompressed WAV stems so you can import them straight into any desktop DAW.',
      },
      {
        q: 'Can I choose which microphone or input channel each track records?',
        a: 'Yes. When using the built-in microphone or a connected compatible class-compliant audio interface, you can select which hardware input channel is routed to your active track.',
      },
      {
        q: 'Can I mute and solo tracks while listening back?',
        a: 'Yes. Each track has dedicated Mute and Solo buttons along with volume balance controls for quick monitoring.',
      },
    ],
  },
  {
    slug: 'overdub-app-iphone',
    path: '/overdub-app-iphone/',
    title: 'Overdub App for iPhone – Record Voice and Instruments | Aurec',
    metaDescription: 'Overdub vocal harmonies, guitar solos, and instrument layers on iPhone. Synchronized playback on a shared audio clock with zero timing drift.',
    keywords: 'overdub app iphone, overdub vocal harmonies ios, record over audio iphone, sound overdubbing app, zero latency overdub',
    h1: 'Overdub App for iPhone – Record Voice and Instruments',
    badge: 'Synchronized Overdubbing',
    heroSubtitle: 'Listen to your base track in headphones while recording new takes in tight sync. Built for songwriters, singers, and musicians building ideas on the go.',
    heroImage: {
      src: '/screenshots/iphone/multitrack.png',
      alt: 'Aurec overdub recording screen showing aligned audio tracks for vocals and instruments on iPhone',
      width: 1320,
      height: 2868,
      device: 'iphone',
    },
    technicalSpecs: [
      { label: 'Engine Clock', value: 'Shared Hardware Sample Clock' },
      { label: 'Buffer Architecture', value: 'Pre-Allocated Lock-Free Ring Buffer' },
      { label: 'Audio Fidelity', value: '24-bit / 32-bit Float Uncompressed WAV' },
      { label: 'Take Safety', value: 'Non-Destructive Multi-Layer Storage' },
    ],
    guideSections: [
      {
        heading: 'The Problem with Basic Recording Apps',
        paragraphs: [
          'Most voice memo apps on iPhone only allow you to record a single audio stream at a time. If you want to sing a harmony over a chord progression you recorded earlier, you are forced to play the original track on another device while recording into your phone.',
          'This results in terrible sound quality, room echo, and speaker bleed. Aurec solves this natively by providing an overdub engine designed specifically for iOS devices.',
        ],
      },
      {
        heading: 'The Simple 4-Step Overdub Workflow',
        paragraphs: [
          'Building layered music in Aurec requires no studio engineering degree: record your base track (guitar, beat, or guide vocal), plug in headphones so the mic captures only your new performance, tap Overdub to record your new take in tight sync, and trim takes in the <a href="/audio-editor-iphone/" style="color: var(--accent-color); text-decoration: underline;">built-in editor</a>.',
          'This workflow lets you test song arrangements, vocal harmonies, and instrument countermelodies wherever you happen to be sitting with your phone.',
        ],
      },
      {
        heading: 'Why Synchronized Audio Clocks Matter',
        paragraphs: [
          'In poorly engineered audio apps, playback and recording run on separate software timers. Over a three-minute song, the new take can gradually drift by dozens of milliseconds, causing the harmony to fall awkwardly out of time.',
          'Aurec coordinates both playback and capture nodes within a unified audio engine sharing the same hardware sample clock. Your takes stay locked together down to the sample from the first note to the final chord.',
          'If you want to track with external gear, check out our guide on <a href="/usb-audio-interface-ipad/" style="color: var(--accent-color); text-decoration: underline;">using USB audio interfaces on iPad and iPhone</a> or read <a href="/record-guitar-and-vocals-iphone/" style="color: var(--accent-color); text-decoration: underline;">how to record guitar and vocals</a>.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Zero-Drift Shared Clock',
        description: 'Playback and recording lock to the exact same audio render timeline, eliminating timing drift.',
      },
      {
        title: 'Headphone Monitoring',
        description: 'Listen to guide tracks clearly while keeping new takes completely clean of speaker bleed.',
      },
      {
        title: 'Non-Destructive Takes',
        description: 'Every overdub is saved as an independent layer, keeping your original recording untouched.',
      },
      {
        title: 'Quick Balance & Export',
        description: 'Adjust track levels immediately and export the combined mix as MP3/M4A or individual WAV stems.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Pick or Record a Base Track',
        description: 'Start with an acoustic guitar riff, beat, or vocal idea recorded in uncompressed WAV.',
      },
      {
        step: '02',
        title: 'Put On Headphones',
        description: 'Connect wired or compatible headphones so your microphone only hears your new performance.',
      },
      {
        step: '03',
        title: 'Record Your Layer',
        description: 'Sing harmonies, lay down a solo, or add percussion locked in synchronization with the base track.',
      },
    ],
    faq: [
      {
        q: 'Why must I use headphones when overdubbing on iPhone?',
        a: 'If you do not wear headphones, your iPhone speakers will play the backing track out loud into the microphone, creating unwanted bleed and echo on your new layer. Headphones ensure your new track is completely isolated and clean.',
      },
      {
        q: 'How does Aurec prevent the new track from drifting out of time?',
        a: 'Aurec synchronizes both the playback player and input recorder to a single shared sample clock within the audio engine, preventing the micro-delays and drifting common in generic recording apps.',
      },
      {
        q: 'Can I delete or re-record an overdub without losing the first track?',
        a: 'Yes. Every layer is non-destructive. If you make a mistake on a harmony, you can simply clear that layer and record another take without altering the original base recording.',
      },
      {
        q: 'Can I export the final overdubbed tracks as separate files?',
        a: 'Yes. You can export the combined mix as an MP3, M4A, or WAV file, or export separate time-aligned WAV stems for desktop mixing.',
      },
    ],
  },
  {
    slug: 'record-guitar-and-vocals-iphone',
    path: '/record-guitar-and-vocals-iphone/',
    title: 'How to Record Guitar and Vocals on iPhone | Aurec',
    metaDescription: 'Learn how to record acoustic guitar and vocals on iPhone. Practical tips for mic placement, overdubbing with headphones, and using external USB interfaces.',
    keywords: 'how to record guitar and vocals iphone, acoustic guitar iphone recording, record songs on phone, overdub guitar vocals, musician mobile recording',
    h1: 'How to Record Guitar and Vocals on iPhone',
    badge: 'Songwriter Recording Guide',
    heroSubtitle: 'A practical songwriter’s guide to capturing acoustic guitar and voice cleanly on your phone. Start with the built-in mic, overdub harmonies, or plug in a USB interface.',
    heroImage: {
      src: '/screenshots/iphone/multitrack.png',
      alt: 'Aurec multitrack audio interface with dedicated guitar and vocal takes recorded on iPhone',
      width: 1320,
      height: 2868,
      device: 'iphone',
    },
    technicalSpecs: [
      { label: 'Input Options', value: 'Built-in iPhone Mic & External USB' },
      { label: 'Workflow Modes', value: 'Live Single Take or 2-Pass Overdub' },
      { label: 'File Formats', value: 'Uncompressed WAV & AAC (MP3 Export)' },
      { label: 'Latency Performance', value: 'Synchronized Low-Latency Monitoring' },
    ],
    guideSections: [
      {
        heading: 'Method 1: Capturing Live Guitar and Voice with the Built-in Mic',
        paragraphs: [
          'When a new chord progression or lyric idea arrives, speed is everything. You do not need to connect cables or microphones to get a great demo. The built-in microphones on modern iPhones offer surprisingly high dynamic range.',
          'For the best single-take balance, place your iPhone on a steady surface roughly 12 to 18 inches away from you. Angle the bottom microphone toward the 12th fret of your acoustic guitar rather than directly at the soundhole, which prevents boomy low-end resonance. This positioning naturally balances the strummed guitar with your voice.',
        ],
      },
      {
        heading: 'Method 2: The Two-Pass Overdub Workflow (Headphones Required)',
        paragraphs: [
          'If you want independent volume control over your guitar and vocal tracks, record them in two passes using Aurec’s <a href="/overdub-app-iphone/" style="color: var(--accent-color); text-decoration: underline;">overdub mode</a>:',
          'First, lay down the acoustic guitar rhythm track cleanly. Next, put on headphones so the phone does not play audio through its speakers. Finally, tap overdub and sing your lead vocal while listening to your guitar take in your ears.',
          'This gives you two clean, isolated tracks. You can adjust the vocal level relative to the guitar, trim breaths in the <a href="/audio-editor-iphone/" style="color: var(--accent-color); text-decoration: underline;">audio editor</a>, or add a third track for vocal harmonies.',
        ],
      },
      {
        heading: 'Stepping Up to an Audio Interface',
        paragraphs: [
          'When you are ready for studio fidelity, connect a <a href="/usb-audio-interface-ipad/" style="color: var(--accent-color); text-decoration: underline;">compatible class-compliant USB audio interface</a> to your iPhone or iPad. Plug an XLR condenser mic in for vocals and a dynamic mic or pickup line in for guitar.',
          'Aurec detects the external hardware channels automatically, letting you record both inputs simultaneously onto separate tracks with real-time dBFS level monitoring and clipping alerts.',
          'When finished, export your demo as an MP3 for bandmates or export uncompressed WAV stems to drop into your computer DAW.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Built-In Mic Optimization',
        description: 'High headroom recording that handles both soft fingerpicking and loud vocal choruses cleanly.',
      },
      {
        title: 'Hands-Free Auto-Rec',
        description: 'Set a silence threshold so recording starts the moment you strike the first chord without touching the phone.',
      },
      {
        title: 'Two-Pass Overdubbing',
        description: 'Record guitar first, vocal second, with zero audio bleed between tracks for easy volume balancing.',
      },
      {
        title: 'Compatible Audio Interface Support',
        description: 'Plug in external USB sound cards for dedicated XLR and guitar input routing when you need studio fidelity.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Position Your Phone',
        description: 'Set your iPhone at chest height, angled toward the 12th fret of your acoustic guitar.',
      },
      {
        step: '02',
        title: 'Track Guitar First',
        description: 'Record your rhythm progression in clean uncompressed WAV format.',
      },
      {
        step: '03',
        title: 'Overdub Vocal with Headphones',
        description: 'Put on your headphones and lay down your vocal melody locked to the guitar track.',
      },
    ],
    faq: [
      {
        q: 'Should I record guitar and vocals together or separately?',
        a: 'Recording both together in a single take is fastest for capturing spontaneous feelings. However, recording guitar first and overdubbing vocals in a second pass gives you isolated tracks with full control over volume balance and editing.',
      },
      {
        q: 'Where should I place my iPhone when recording acoustic guitar?',
        a: 'Position your phone 12 to 18 inches away, aimed toward where the guitar neck meets the body (around the 12th fret). This captures crisp string definition while avoiding boomy bass from the soundhole.',
      },
      {
        q: 'Can I plug an electric guitar into my iPhone with Aurec?',
        a: 'Yes, by connecting a compatible class-compliant USB audio interface or guitar audio adapter into your iPhone’s Lightning or USB-C port.',
      },
      {
        q: 'How can I send my recorded song to bandmates?',
        a: 'You can export your session as a quick MP3 or M4A file to share via Messages, AirDrop, or WhatsApp, or export full-quality WAV files for formal production.',
      },
    ],
  },
  {
    slug: 'usb-audio-interface-ipad',
    path: '/usb-audio-interface-ipad/',
    title: 'Record with a USB Audio Interface on iPad | Aurec',
    metaDescription: 'Connect compatible class-compliant USB audio interfaces to iPad and iPhone. Route multichannel inputs, inspect dBFS meters, and record in 32-bit float WAV.',
    keywords: 'usb audio interface ipad, class compliant audio interface ios, multichannel recording ipad, iphone external sound card, mobile interface routing',
    h1: 'Record with a USB Audio Interface on iPad & iPhone',
    badge: 'Hardware Interface Routing',
    heroSubtitle: 'Turn your iPad or iPhone into a portable recording station. Connect compatible class-compliant USB audio hardware with multichannel routing and level metering.',
    heroImage: {
      src: '/screenshots/ipad/multitrack.png',
      alt: 'Aurec recording and multitrack studio interface on iPad utilizing USB audio interface connectivity',
      width: 2064,
      height: 2752,
      device: 'ipad',
    },
    technicalSpecs: [
      { label: 'Hardware Standard', value: 'Compatible Class-Compliant USB' },
      { label: 'Channel Routing', value: 'Multichannel Input Selection' },
      { label: 'Metering System', value: 'Real-Time Peak, RMS & Clip Indicators' },
      { label: 'Audio Format', value: '16-bit, 24-bit, 32-bit Float Uncompressed WAV' },
    ],
    guideSections: [
      {
        heading: 'What Does "Class-Compliant" Mean on iOS?',
        paragraphs: [
          'On macOS and Windows, many studio audio devices require proprietary driver software to function. iOS and iPadOS do not support third-party kernel drivers. Instead, Apple devices work exclusively with **compatible class-compliant audio interfaces** that adhere to standardized USB Audio protocols.',
          'When you connect a class-compliant device, iPadOS recognizes it instantly without configuration. Aurec inspects the connected hardware and unlocks multichannel input routing.',
        ],
      },
      {
        heading: 'Hardware Connection & Power Requirements: USB-C vs. Lightning',
        paragraphs: [
          'Hardware connectivity varies significantly depending on your iPad or iPhone model. Modern USB-C iPads and iPhones (such as iPhone 15 and newer) connect directly with standard USB-C cables. Simple two-channel bus-powered interfaces often run straight from the device battery, but multi-channel interfaces with 48V phantom power draw substantial current and will require a powered USB-C hub or an adapter with power pass-through.',
          'Lightning iPads and iPhones cannot deliver sufficient bus power for most audio interfaces. You will need an official Apple Lightning to USB3 Camera Adapter with an active Lightning charging cable plugged in to supply 5V power to the interface.',
        ],
      },
      {
        heading: 'Multichannel Input Routing and Peak Metering',
        paragraphs: [
          'Once connected, Aurec displays your detected hardware inputs (Input 1, Input 2, etc.). You can name these inputs (e.g. "Lead Vocal" and "Acoustic DI") and assign them directly to separate tracks in your <a href="/multitrack-recorder-iphone/" style="color: var(--accent-color); text-decoration: underline;">multitrack workspace</a>.',
          'Aurec provides live dBFS peak and RMS level meters with clipping indicators on every hardware channel. This lets you set optimal gain on your interface preamp before hitting record, avoiding digital distortion.',
          'Need to clean up or trim your takes? Check our <a href="/audio-editor-iphone/" style="color: var(--accent-color); text-decoration: underline;">audio editor guide</a> or learn how to <a href="/overdub-app-iphone/" style="color: var(--accent-color); text-decoration: underline;">overdub additional layers</a>.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Automatic Hardware Discovery',
        description: 'Detects compatible class-compliant USB audio devices immediately upon connection without driver setup.',
      },
      {
        title: 'Multichannel Track Assignment',
        description: 'Route individual physical interface inputs directly to separate recording layers.',
      },
      {
        title: 'Peak & RMS Metering with Clip Alerts',
        description: 'Monitor preamp gain levels in real-time to avoid harsh digital clipping and distortion.',
      },
      {
        title: 'Studio 32-Bit Float WAV Support',
        description: 'Capture high dynamic range audio directly from your interface converters up to 48 kHz.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Connect Hardware',
        description: 'Connect your compatible class-compliant interface using a USB-C cable or Apple Lightning adapter with power.',
      },
      {
        step: '02',
        title: 'Set Gain and Check Meters',
        description: 'Monitor input channel levels in Aurec and adjust your interface preamp gain knobs below 0 dBFS.',
      },
      {
        step: '03',
        title: 'Track and Export',
        description: 'Record your takes in uncompressed WAV and export the files directly to Files, AirDrop, or desktop DAWs.',
      },
    ],
    faq: [
      {
        q: 'Will any USB audio interface work with my iPad or iPhone?',
        a: 'No. Only compatible class-compliant audio interfaces work with iPadOS and iOS. Interfaces that require proprietary driver installations on Mac or PC will not work on iPad.',
      },
      {
        q: 'Why does my iPad display "Accessory requires too much power"?',
        a: 'Many audio interfaces draw more electrical current than an iPad or iPhone can supply from its battery alone. You must connect a powered USB hub or use an Apple adapter with a power pass-through charger plugged in.',
      },
      {
        q: 'Can I record multiple separate inputs at the same time?',
        a: 'Yes. If your compatible audio interface has multiple hardware inputs (such as 2 or 4 channels), Aurec lets you assign separate inputs to separate tracks to record simultaneously.',
      },
      {
        q: 'Can I hear my playback through the interface headphone jack?',
        a: 'Yes. When an audio interface is connected, iPadOS automatically routes audio output through the interface’s headphone and monitor outputs.',
      },
    ],
  },
  {
    slug: 'audio-editor-iphone',
    path: '/audio-editor-iphone/',
    title: 'Audio Recorder and Editor for iPhone | Aurec',
    metaDescription: 'Fast, intuitive audio editor for iPhone and iPad. Inspect zoomable waveforms, trim dead air, split long recordings, reduce noise, and export in WAV or MP3.',
    keywords: 'audio editor iphone, audio recorder and editor ios, trim wav iphone, split audio track ios, mobile waveform editor, noise reduction iphone',
    h1: 'Audio Recorder and Editor for iPhone & iPad',
    badge: 'Onboard Waveform Editing',
    heroSubtitle: 'Record instantly, then trim, split, and polish your takes on the spot. A responsive on-device waveform editor that gets your audio ready to share without touching a computer.',
    heroImage: {
      src: '/screenshots/iphone/audio-editor.png',
      alt: 'Aurec audio waveform editor showing precision cut, trim, and split tools on iPhone',
      width: 1320,
      height: 2868,
      device: 'iphone',
    },
    technicalSpecs: [
      { label: 'Waveform Display', value: 'High-Resolution Pinch-to-Zoom' },
      { label: 'Edit Tools', value: 'Trim Boundaries, Cut, Split at Playhead' },
      { label: 'Audio Processing', value: 'Built-in Noise Reduction & Normalization' },
      { label: 'Supported Formats', value: 'Lossless WAV & M4A (MP3 Export)' },
    ],
    guideSections: [
      {
        heading: 'Fast Post-Recording Editing on Touchscreens',
        paragraphs: [
          'Nothing stalls momentum faster than having to AirDrop an audio file to your laptop just to cut thirty seconds of dead air from the start or trim a cough. Aurec integrates a dedicated audio editor directly into your recording workflow.',
          'As soon as you finish recording, you can open the waveform view and make clean, surgical edits using natural touch gestures.',
        ],
      },
      {
        heading: 'Pinch-to-Zoom Waveform and Precision Trimming',
        paragraphs: [
          'Aurec renders detailed audio peaks down to individual transients. Pinch to zoom in for millisecond accuracy when setting start and end boundaries, or zoom out to see the entire arc of your session.',
          'Use the non-destructive trim handles to remove silence before your song begins or cut off trailing background noise. Your original recording file remains untouched on disk, so you never have to worry about accidentally destroying a take.',
        ],
      },
      {
        heading: 'Splitting Tracks and Cleaning Up Background Noise',
        paragraphs: [
          'If you recorded a 45-minute band rehearsal or a long lecture, scrolling through a single continuous file is frustrating. Aurec’s split track tool lets you drop markers at the playhead and divide the file into individual songs or distinct segments.',
          'To clean up subtle room hiss or air conditioning hum, engage Aurec’s onboard noise reduction tool before exporting. When your edits are complete, export in pristine uncompressed WAV, storage-saving M4A, or export as MP3 for quick email and chat sharing.',
          'Explore how to layer edited takes in our <a href="/multitrack-recorder-iphone/" style="color: var(--accent-color); text-decoration: underline;">multitrack guide</a> or try <a href="/overdub-app-iphone/" style="color: var(--accent-color); text-decoration: underline;">overdub recording</a> for vocal passes.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Smooth Waveform Scrubbing',
        description: 'Pinch and zoom into audio transients for surgical edit cuts on iOS touchscreens.',
      },
      {
        title: 'Non-Destructive Trimming',
        description: 'Trim start and end points with complete peace of mind that raw takes remain safe.',
      },
      {
        title: 'Playhead Track Splitting',
        description: 'Divide long rehearsal sessions or interviews into separate audio clips with one tap.',
      },
      {
        title: 'Onboard Noise Reduction',
        description: 'Clean up subtle background room noise and hiss directly on your phone processor.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Open Waveform',
        description: 'Select any recording from your library to open the high-resolution waveform editor.',
      },
      {
        step: '02',
        title: 'Zoom and Trim',
        description: 'Pinch to inspect transients, drag trim boundaries, or split long recordings into separate files.',
      },
      {
        step: '03',
        title: 'Polish and Export',
        description: 'Apply subtle noise reduction if needed and export as an MP3, M4A, or uncompressed WAV file.',
      },
    ],
    faq: [
      {
        q: 'Is audio editing in Aurec destructive?',
        a: 'No. Aurec’s editing is non-destructive. Trimming and cutting adjusts playback boundaries while preserving your raw recorded audio file.',
      },
      {
        q: 'Can I split a long rehearsal recording into individual song files?',
        a: 'Yes. Place the playhead at the start of each song and use the split track function to divide a lengthy session into separate tracks.',
      },
      {
        q: 'Can I export my edited audio as an MP3?',
        a: 'Yes. While Aurec records and edits in uncompressed WAV or M4A for sound quality, you can export your finished edits directly as MP3, M4A, or WAV.',
      },
      {
        q: 'Does Aurec support audio plugins like AUv3 or VST?',
        a: 'No. Aurec is built as a streamlined recorder and editor without plugin host overhead, keeping the interface fast, responsive, and easy to use.',
      },
    ],
  },
  {
    slug: 'audacity-alternative-ios',
    path: '/audacity-alternative-ios/',
    title: 'A Simple Audacity Alternative for iPhone and iPad | Aurec',
    metaDescription: 'Looking for Audacity on iOS? Aurec is a clean, native alternative for iPhone and iPad. Record immediately, overdub tracks, edit waveforms, and export uncompressed WAV.',
    keywords: 'audacity alternative ios, audacity for iphone, audacity ipad, mobile audio editor iphone, open source style recorder ios',
    h1: 'A Simple Audacity Alternative for iPhone & iPad',
    badge: 'Mobile Audio Alternative',
    heroSubtitle: 'Audacity is desktop-only. When you need straightforward recording, waveform editing, and overdubbing natively on your iPhone or iPad, Aurec provides a focused mobile alternative.',
    heroImage: {
      src: '/screenshots/iphone/audio-editor.png',
      alt: 'Aurec audio waveform editor and multitrack controls as a straightforward Audacity alternative for iOS',
      width: 1320,
      height: 2868,
      device: 'iphone',
    },
    technicalSpecs: [
      { label: 'Platform', value: 'Native iOS & iPadOS (Universal)' },
      { label: 'Core Focus', value: 'Fast Audio Capture, Overdubbing & Editing' },
      { label: 'Export Compatibility', value: 'Uncompressed WAV Stems & MP3' },
      { label: 'Privacy Model', value: 'Offline, Ad-Free, No Accounts' },
    ],
    disclaimer: 'Notice: Aurec is an independent application developed by its own team. It is not affiliated with, maintained by, or endorsed by Audacity or Muse Group. Audacity is a registered trademark of its respective owners.',
    guideSections: [
      {
        heading: 'Is There an Official Audacity App for iOS?',
        paragraphs: [
          'No. Audacity is an open-source audio editor built exclusively for desktop operating systems: macOS, Windows, and Linux. There is no official Audacity app for iPhone or iPad. Any apps using the Audacity name on the Apple App Store are unofficial third-party listings.',
          'Because Audacity’s interface relies heavily on mouse clicks, complex drop-down menus, and multi-window dialogs, porting it directly to mobile touchscreens would result in a frustrating experience.',
        ],
      },
      {
        heading: 'An Honest Comparison: What Aurec Does (and Doesn’t Do)',
        paragraphs: [
          'Aurec does not claim to replace Audacity’s decades of deep desktop features. Audacity includes complex spectral editing, multi-band compression, audio macro scripts, and VST plugin hosting. Aurec does not have these features.',
          'Instead, Aurec focuses on what mobile creators actually need when they are away from their computers: instant one-tap recording, synchronized overdubbing to layer harmonies or guitars, clean touch waveform editing, and support for <a href="/usb-audio-interface-ipad/" style="color: var(--accent-color); text-decoration: underline;">compatible class-compliant USB audio interfaces</a>.',
        ],
      },
      {
        heading: 'No Accounts, No Ads, and Seamless Desktop Handoff',
        paragraphs: [
          'Like Audacity, Aurec respects your workflow. It does not bombard you with banner ads, force you to register an account, or lock your audio behind cloud subscriptions. Your files stay on your device.',
          'When you finish sketching on your iPhone or iPad, export your session as uncompressed WAV files or separated stems. AirDrop them to your computer, open them in Audacity or any desktop DAW, and continue fine-tuning your mix.',
          'Read our <a href="/voice-recorder-iphone/" style="color: var(--accent-color); text-decoration: underline;">voice recorder guide</a> to learn about instant capture or explore our <a href="/multitrack-recorder-iphone/" style="color: var(--accent-color); text-decoration: underline;">multitrack workspace</a>.',
        ],
      },
    ],
    coreFeatures: [
      {
        title: 'Built for Touchscreens',
        description: 'Intuitive touch gestures replace cluttered desktop menus for trimming, zooming, and recording.',
      },
      {
        title: 'Zero-Drift Overdubbing',
        description: 'Layer vocals and instruments in perfect sync on mobile without complex track routing.',
      },
      {
        title: 'Open WAV Stem Export',
        description: 'Move projects seamlessly between your iPhone and desktop Audacity via AirDrop or Files.',
      },
      {
        title: 'Ad-Free Offline Privacy',
        description: 'Complete respect for user data: no account sign-ups, no tracking, and no subscription locks.',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Record On the Go',
        description: 'Capture raw voice takes, acoustic riffs, or field recordings anywhere with your iPhone or iPad.',
      },
      {
        step: '02',
        title: 'Overdub and Trim',
        description: 'Layer vocal harmonies with headphones and trim dead air in the touch waveform editor.',
      },
      {
        step: '03',
        title: 'Open in Audacity',
        description: 'Export uncompressed WAV stems to your computer to continue detailed mixing in desktop Audacity.',
      },
    ],
    faq: [
      {
        q: 'Is Aurec affiliated with Audacity?',
        a: 'No. Aurec is an independent, native iOS application and is not affiliated with, endorsed by, or connected to Audacity or the Muse Group.',
      },
      {
        q: 'Why isn’t official Audacity available on iPhone?',
        a: 'Audacity was designed from the ground up for desktop operating systems with mouse and keyboard navigation. Its complex multi-window layout and codebase are not built for mobile touchscreen interfaces.',
      },
      {
        q: 'Can I open Aurec recordings inside Audacity on my computer?',
        a: 'Yes. Aurec exports industry-standard uncompressed WAV files and time-aligned stems that you can immediately import into Audacity on Mac, Windows, or Linux.',
      },
      {
        q: 'Does Aurec have all the effects and plugins of desktop Audacity?',
        a: 'No. Desktop Audacity has decades of specialized audio DSP effects, macro chains, and plugin hosting. Aurec is intentionally streamlined as a fast, touch-friendly mobile recorder, overdub tool, and trimmer without desktop bloat.',
      },
    ],
  },
]

export function getSeoPageBySlug(slug) {
  return SEO_PAGES.find(p => p.slug === slug)
}
