export const APP_STORE_URL = 'https://apps.apple.com/us/app/aurec/id6759679586'

export function getLocale() {
  if (typeof document === 'undefined') return 'en'

  const params = new URLSearchParams(window.location.search)
  const forced = params.get('lang')?.toLowerCase()
  if (forced === 'fi' || forced === 'en') return forced

  const lang = document.documentElement.lang?.toLowerCase() || ''
  if (lang.startsWith('fi')) return 'fi'

  const path = window.location.pathname
  if (path === '/fi' || path.startsWith('/fi/')) return 'fi'

  return 'en'
}

export function getLocalePath(locale) {
  return locale === 'fi' ? '/fi/?lang=fi' : '/?lang=en'
}

export const copy = {
  en: {
    langLabel: 'English',
    nav: {
      features: 'Features',
      builtFor: 'Built For',
      download: 'Download',
    },
    hero: {
      badge: 'Now available on the App Store',
      words: ['beautifully', 'effortlessly', 'automatically', 'clearly', 'like a pro'],
      subhead: 'A simple voice recorder iOS app with overdub for iPhone. Record guitar and voice, ideas, and sessions with high-quality audio and automatic recording.',
      primaryCta: 'Download on the App Store',
      secondaryCta: 'See features',
      mockup: {
        monitor: 'Monitor',
        session: 'Our Band · #3',
        recording: 'Recording',
        stop: 'Stop',
        autoRecord: 'Auto Record',
        tabs: ['Recorder', 'Recordings', 'Info'],
      },
    },
    value: {
      eyebrow: 'What is Aurec',
      title: 'Aurec is a modern voice recorder app for iPhone that lets you record audio, music, and ideas effortlessly.',
      body1: 'Unlike basic recording apps, Aurec supports automatic recording, overdubbing, and high-quality WAV recording.',
      body2: 'Whether you are a musician, student, or content creator, Aurec helps you capture ideas instantly.',
      screens: [
        { label: 'One-tap recording', description: 'Start instantly, stop anytime' },
        { label: 'Records automatically', description: 'Auto-Rec detects sound and starts' },
        { label: 'Smart organization', description: 'Sessions keep everything tidy' },
        { label: 'Full control', description: 'Pro settings, one tap away' },
      ],
      stats: [
        { value: '48 kHz', label: 'Studio-grade sample rate' },
        { value: '32-bit', label: 'Float recording depth' },
        { value: '∞', label: 'Recording length' },
      ],
    },
    features: {
      eyebrow: 'Features',
      title1: 'Everything you need.',
      title2: "Nothing you don't.",
      items: [
        {
          title: 'One-tap recording',
          description: 'Start recording immediately with zero setup friction. Just open the app and hit record.',
        },
        {
          title: 'Built-in audio editor',
          description: 'Trim, cut, and polish recordings directly on iPhone. No desktop required.',
        },
        {
          title: 'Auto Record',
          description: 'Set a silence threshold and let Aurec start recording automatically when sound is detected. Never miss a moment.',
        },
        {
          title: 'Smart organization',
          description: 'Sessions, metadata, and a clean list keep everything easy to manage. Find any recording instantly.',
        },
        {
          title: 'Easy sharing & export',
          description: 'Send files quickly to Files, AirDrop, or other iOS apps in your preferred format.',
        },
      ],
    },
    builtFor: {
      eyebrow: 'Built For',
      title1: 'One recorder.',
      title2: 'Every situation.',
      items: [
        {
          title: 'Musicians',
          description: "Capture riffs and demos the moment inspiration hits. Never lose an idea because your gear wasn't ready.",
        },
        {
          title: 'Podcasters & video creators',
          description: 'Reliable field recording without complexity. Focus on your content — Aurec handles the rest.',
        },
        {
          title: 'Students & note-takers',
          description: 'Save voice notes clearly and stay organized. Your ideas, always within reach.',
        },
      ],
    },
    trust: {
      eyebrow: 'Built for iOS',
      title1: 'Designed around iPhone & iPad.',
      title2: 'Fast, stable, familiar.',
      intro: 'Aurec is designed around native Apple capabilities for a fast, stable, and familiar experience on both iPhone and iPad.',
      items: [
        {
          title: 'Native iPhone & iPad',
          description: 'Built with native iOS APIs for a fast, stable, and familiar experience on both iPhone and iPad.',
        },
        {
          title: 'No account required',
          description: 'Start recording on first launch. No sign-up, no cloud lock-in.',
        },
        {
          title: 'Your data stays yours',
          description: 'Recordings stay on your device. No tracking, no ads.',
        },
      ],
    },
    footer: {
      links: {
        appStore: 'App Store',
        privacy: 'Privacy Policy',
        support: 'Support',
        contact: 'Contact',
      },
      eyebrow: 'Get started',
      title: 'Start recording today',
      body: 'Download Aurec on the App Store and capture your ideas before they fade.',
      cta: 'Download on the App Store',
    },
  },
  fi: {
    langLabel: 'Suomi',
    nav: {
      features: 'Ominaisuudet',
      builtFor: 'Kenelle',
      download: 'Lataa',
    },
    hero: {
      badge: 'Nyt App Storessa',
      words: ['selkeästi', 'vaivattomasti', 'automaattisesti', 'laadukkaasti', 'kuin ammattilainen'],
      subhead: 'Yksinkertainen iPhonen äänityssovellus overdub-tuella. Tallenna kitaraa ja laulua, ideoita ja sessioita laadukkaasti sekä automaattisella äänityksellä.',
      primaryCta: 'Lataa App Storesta',
      secondaryCta: 'Katso ominaisuudet',
      mockup: {
        monitor: 'Monitori',
        session: 'Bändi · #3',
        recording: 'Tallennus',
        stop: 'Pysäytä',
        autoRecord: 'Auto-Rec',
        tabs: ['Tallennin', 'Tallenteet', 'Tiedot'],
      },
    },
    value: {
      eyebrow: 'Mikä on Aurec',
      title: 'Aurec on moderni iPhonen äänityssovellus, jolla tallennat ääntä, musiikkia ja ideoita vaivattomasti.',
      body1: 'Toisin kuin perusäänittimet, Aurec tukee automaattista tallennusta, overdubia ja korkealaatuista WAV-äänitystä.',
      body2: 'Olitpa muusikko, opiskelija tai sisällöntuottaja, Aurec auttaa tallentamaan ideat heti niiden syntyessä.',
      screens: [
        { label: 'Tallennus yhdellä napilla', description: 'Aloita heti, lopeta milloin vain' },
        { label: 'Tallentaa automaattisesti', description: 'Auto-Rec tunnistaa äänen ja aloittaa' },
        { label: 'Fiksu organisointi', description: 'Sessiot pitävät kaiken järjestyksessä' },
        { label: 'Täysi hallinta', description: 'Pro-asetukset yhden napin takana' },
      ],
      stats: [
        { value: '48 kHz', label: 'Studiotasoinen näytteenottotaajuus' },
        { value: '32-bit', label: 'Float-tallennussyvyys' },
        { value: '∞', label: 'Tallennuspituus' },
      ],
    },
    features: {
      eyebrow: 'Ominaisuudet',
      title1: 'Kaikki mitä tarvitset.',
      title2: 'Ei mitään turhaa.',
      items: [
        {
          title: 'Yhden napin tallennus',
          description: 'Aloita tallennus heti ilman säätöä. Avaa sovellus ja paina tallennusta.',
        },
        {
          title: 'Sisäänrakennettu audioeditori',
          description: 'Trimmaa, leikkaa ja viimeistele tallenteet suoraan iPhonessa. Tietokonetta ei tarvita.',
        },
        {
          title: 'Auto-Rec',
          description: 'Aseta hiljaisuuskynnys ja anna Aurecin aloittaa tallennus automaattisesti äänen havaitessa. Et menetä hetkeäkään.',
        },
        {
          title: 'Fiksu organisointi',
          description: 'Sessiot, metadata ja selkeä lista pitävät tallenteet helposti hallinnassa. Löydä mikä tahansa tallenne nopeasti.',
        },
        {
          title: 'Helppo jako ja vienti',
          description: 'Lähetä tiedostot nopeasti Tiedostoihin, AirDropilla tai muihin iOS-sovelluksiin haluamassasi muodossa.',
        },
      ],
    },
    builtFor: {
      eyebrow: 'Kenelle',
      title1: 'Yksi äänitin.',
      title2: 'Joka tilanteeseen.',
      items: [
        {
          title: 'Muusikoille',
          description: 'Tallenna riffit ja demot heti inspiraation iskiessä. Älä menetä ideaa siksi, ettei kalusto ollut valmiina.',
        },
        {
          title: 'Podcastaajille ja videontekijöille',
          description: 'Luotettava kenttätallennus ilman turhaa monimutkaisuutta. Keskity sisältöön, Aurec hoitaa loput.',
        },
        {
          title: 'Opiskelijoille ja muistiinpanoihin',
          description: 'Tallenna puhemuistiinpanot selkeästi ja pidä ne järjestyksessä. Ideat ovat aina lähellä.',
        },
      ],
    },
    trust: {
      eyebrow: 'Tehty iOS:lle',
      title1: 'Suunniteltu iPhonelle ja iPadille.',
      title2: 'Nopea, vakaa, tuttu.',
      intro: 'Aurec hyödyntää Applen natiiveja ominaisuuksia, jotta käyttö olisi nopeaa, vakaata ja luontevaa niin iPhonella kuin iPadillakin.',
      items: [
        {
          title: 'Natiivi iPhone ja iPad',
          description: 'Rakennettu iOS:n natiiveilla rajapinnoilla nopeaa, vakaata ja tuttua käyttökokemusta varten.',
        },
        {
          title: 'Ei tiliä pakollisena',
          description: 'Aloita tallennus heti ensimmäisellä käynnistyskerralla. Ei rekisteröitymistä, ei pilvilukkoa.',
        },
        {
          title: 'Datasi pysyy sinun',
          description: 'Tallenteet pysyvät laitteellasi. Ei seurantaa, ei mainoksia.',
        },
      ],
    },
    footer: {
      links: {
        appStore: 'App Store',
        privacy: 'Tietosuojaseloste',
        support: 'Tuki',
        contact: 'Yhteys',
      },
      eyebrow: 'Aloita',
      title: 'Aloita tallentaminen tänään',
      body: 'Lataa Aurec App Storesta ja tallenna ideasi ennen kuin ne katoavat.',
      cta: 'Lataa App Storesta',
    },
  },
}
