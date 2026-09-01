export const APP_STORE_URL = 'https://apps.apple.com/us/app/aurec/id6759679586'

export const LOCALES = ['en', 'fi', 'fr', 'sv', 'es', 'de', 'zh', 'ja', 'hi', 'pt']

export const localeNames = {
  en: 'English',
  fi: 'Suomi',
  fr: 'Français',
  sv: 'Svenska',
  es: 'Español',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  hi: 'हिन्दी',
  pt: 'Português',
}

export function getLocale() {
  if (typeof document === 'undefined') return 'en'

  const params = new URLSearchParams(window.location.search)
  const forced = params.get('lang')?.toLowerCase()
  if (LOCALES.includes(forced)) return forced

  const lang = document.documentElement.lang?.toLowerCase() || ''
  const langPrefix = lang.slice(0, 2)
  if (LOCALES.includes(langPrefix)) return langPrefix

  const path = window.location.pathname
  for (const l of LOCALES) {
    if (l === 'en') continue;
    if (path === `/${l}` || path.startsWith(`/${l}/`)) return l;
  }

  return 'en'
}

export function getLocalePath(locale) {
  return locale === 'en' ? '/?lang=en' : `/${locale}/?lang=${locale}`
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
      headlineVerb: 'Record',
      words: ['easily', 'automatically', 'with quality'],
      subhead: 'Record guitar and voice, ideas, with quality. Simple and easy, yet full of features.',
      primaryCta: 'Download on the App Store',
      secondaryCta: 'See features',
      mockup: {
        monitor: 'Monitor',
        session: 'Session · #3',
        recording: 'Recording',
        stop: 'Stop',
        autoRecord: 'Auto-Rec',
        tabs: ['Recorder', 'Recordings', 'Info'],
      },
    },
    value: {
      eyebrow: 'What is Aurec',
      title: 'Aurec is a modern voice recorder app for iPhone that lets you record audio, music, and ideas effortlessly.',
      body1: 'Unlike basic recording apps, Aurec supports automatic recording, overdubbing, and WAV audio format.',
      body2: 'Whether you are a musician, student, or content creator, Aurec helps you capture ideas the moment they appear.',
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
          description: 'Start recording immediately with no extra setup. Open the app and press record.',
        },
        {
          title: 'Built-in audio editor',
          description: 'Trim, cut, and polish recordings directly on iPhone. No computer required.',
        },
        {
          title: 'Auto-Rec',
          description: 'Set a silence threshold and let Aurec start recording automatically when sound is detected. You will not miss a moment.',
        },
        {
          title: 'Smart organization',
          description: 'Sessions, metadata, and a clear list keep recordings easy to manage. Find any recording quickly.',
        },
        {
          title: 'Easy sharing & export',
          description: 'Send files quickly to Files, AirDrop, or other iOS apps in the format you prefer.',
        },
      ],
    },
    builtFor: {
      eyebrow: 'Built For',
      title1: 'One recorder.',
      title2: 'For every situation.',
      items: [
        {
          title: 'For musicians',
          description: "Capture riffs and demos the moment inspiration hits. Do not lose an idea because your gear was not ready. Record band rehearsals and gigs, for example, by using automatic recording.",
        },
        {
          title: 'For podcasters and video creators',
          description: 'Reliable field recording without unnecessary complexity. Focus on your content, Aurec handles the rest.',
        },
        {
          title: 'For students and notes',
          description: 'Record voice notes clearly and keep them organized. Your ideas are always within reach.',
        },
      ],
    },
    trust: {
      eyebrow: 'Built for iOS',
      title1: 'Designed for iPhone and iPad.',
      title2: 'Fast, stable, familiar.',
      intro: 'Aurec takes advantage of Apple native capabilities so the experience feels fast, stable, and natural on both iPhone and iPad.',
      items: [
        {
          title: 'Native iPhone and iPad',
          description: 'Built with native iOS APIs for a fast, stable, and familiar experience.',
        },
        {
          title: 'No account required',
          description: 'Start recording on the very first launch. No sign-up, no cloud lock-in.',
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
      body: 'Download Aurec on the App Store and capture your ideas before they disappear.',
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
      headlineVerb: 'Tallenna',
      words: ['helposti', 'automaattisesti', 'laadukkaasti'],
      subhead: 'Tallenna kitaraa ja laulua, ideoita, laadukkaasti. Yksinkertainen ja helppo, täynnä ominaisuuksia.',
      primaryCta: 'Lataa App Storesta',
      secondaryCta: 'Katso ominaisuudet',
      mockup: {
        monitor: 'Monitor',
        session: 'Sessio · #3',
        recording: 'Tallennus',
        stop: 'Pysäytä',
        autoRecord: 'Auto-Rec',
        tabs: ['Tallennin', 'Tallenteet', 'Tiedot'],
      },
    },
    value: {
      eyebrow: 'Mikä on Aurec',
      title: 'Aurec on moderni iPhonen äänityssovellus, jolla tallennat ääntä, musiikkia ja ideoita vaivattomasti.',
      body1: 'Toisin kuin perusäänittimet, Aurec tukee automaattista tallennusta, päällekkäisäänityksiä ja WAV-äänimuotoa.',
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
          description: 'Tallenna riffit ja demot heti inspiraation iskiessä. Älä menetä ideaa siksi, ettei kalusto ollut valmiina. Äänitä esimerkiksi bänditreenit ja keikat käyttämällä automaattista äänitystä.',
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
  fr: {
    langLabel: 'Français',
    nav: {
      features: 'Fonctionnalités',
      builtFor: 'Pour qui',
      download: 'Télécharger',
    },
    hero: {
      badge: 'Maintenant disponible sur l’App Store',
      headlineVerb: 'Enregistrez',
      words: ['facilement', 'automatiquement', 'avec qualité'],
      subhead: 'Enregistrez guitare, voix et idées avec qualité. Simple et facile, mais riche en fonctionnalités.',
      primaryCta: 'Télécharger sur l’App Store',
      secondaryCta: 'Voir les fonctionnalités',
      mockup: {
        monitor: 'Moniteur',
        session: 'Session · #3',
        recording: 'Enregistrement',
        stop: 'Arrêter',
        autoRecord: 'Auto-Rec',
        tabs: ['Enregistreur', 'Enregistrements', 'Infos'],
      },
    },
    value: {
      eyebrow: 'Qu’est-ce qu’Aurec',
      title: 'Aurec est une application moderne d’enregistrement pour iPhone qui vous permet d’enregistrer sons, musique et idées sans effort.',
      body1: 'Contrairement aux enregistreurs basiques, Aurec prend en charge l’enregistrement automatique, l’overdub et le format audio WAV.',
      body2: 'Que vous soyez musicien, étudiant ou créateur de contenu, Aurec vous aide a capturer vos idées dès qu’elles apparaissent.',
      screens: [
        { label: 'Enregistrement en un geste', description: 'Commencez tout de suite, arrêtez quand vous voulez' },
        { label: 'Enregistre automatiquement', description: 'Auto-Rec détecte le son et démarre' },
        { label: 'Organisation intelligente', description: 'Les sessions gardent tout en ordre' },
        { label: 'Contrôle total', description: 'Réglages pro en un geste' },
      ],
      stats: [
        { value: '48 kHz', label: 'Fréquence d’échantillonnage studio' },
        { value: '32-bit', label: 'Profondeur float' },
        { value: '∞', label: 'Durée d’enregistrement' },
      ],
    },
    features: {
      eyebrow: 'Fonctionnalités',
      title1: 'Tout ce qu’il vous faut.',
      title2: 'Rien de superflu.',
      items: [
        {
          title: 'Enregistrement en un geste',
          description: 'Commencez à enregistrer immédiatement sans configuration supplémentaire. Ouvrez l’app et appuyez sur enregistrer.',
        },
        {
          title: 'Éditeur audio intégré',
          description: 'Coupez, taillez et peaufinez vos enregistrements directement sur iPhone. Aucun ordinateur nécessaire.',
        },
        {
          title: 'Auto-Rec',
          description: 'Définissez un seuil de silence et laissez Aurec démarrer automatiquement quand un son est détecté. Vous ne manquerez aucun moment.',
        },
        {
          title: 'Organisation intelligente',
          description: 'Les sessions, les métadonnées et une liste claire rendent les enregistrements faciles à gérer. Retrouvez rapidement n’importe quel enregistrement.',
        },
        {
          title: 'Partage et export faciles',
          description: 'Envoyez rapidement vos fichiers vers Fichiers, AirDrop ou d’autres apps iOS dans le format de votre choix.',
        },
      ],
    },
    builtFor: {
      eyebrow: 'Pour qui',
      title1: 'Un seul enregistreur.',
      title2: 'Pour chaque situation.',
      items: [
        {
          title: 'Pour les musiciens',
          description: 'Capturez riffs et démos dès que l’inspiration arrive. Ne perdez pas une idée parce que votre matériel n’était pas prêt. Enregistrez par exemple les répétitions et les concerts grâce à l’enregistrement automatique.',
        },
        {
          title: 'Pour les podcasteurs et créateurs vidéo',
          description: 'Un enregistrement de terrain fiable sans complexité inutile. Concentrez-vous sur votre contenu, Aurec s’occupe du reste.',
        },
        {
          title: 'Pour les étudiants et les notes',
          description: 'Enregistrez vos notes vocales clairement et gardez-les organisées. Vos idées restent toujours à portée de main.',
        },
      ],
    },
    trust: {
      eyebrow: 'Conçu pour iOS',
      title1: 'Pensé pour iPhone et iPad.',
      title2: 'Rapide, stable, familier.',
      intro: 'Aurec exploite les capacités natives d’Apple afin d’offrir une expérience rapide, stable et naturelle sur iPhone comme sur iPad.',
      items: [
        {
          title: 'Natif sur iPhone et iPad',
          description: 'Construit avec les API natives iOS pour une expérience rapide, stable et familière.',
        },
        {
          title: 'Aucun compte requis',
          description: 'Commencez à enregistrer dès le premier lancement. Pas d’inscription, pas d’enfermement dans le cloud.',
        },
        {
          title: 'Vos données restent à vous',
          description: 'Les enregistrements restent sur votre appareil. Aucun suivi, aucune publicité.',
        },
      ],
    },
    footer: {
      links: {
        appStore: 'App Store',
        privacy: 'Politique de confidentialité',
        support: 'Support',
        contact: 'Contact',
      },
      eyebrow: 'Commencer',
      title: 'Commencez à enregistrer dès aujourd’hui',
      body: 'Téléchargez Aurec sur l’App Store et capturez vos idées avant qu’elles ne disparaissent.',
      cta: 'Télécharger sur l’App Store',
    },
  },
  sv: {
    langLabel: 'Svenska',
    nav: {
      features: 'Funktioner',
      builtFor: 'För vem',
      download: 'Ladda ner',
    },
    hero: {
      badge: 'Nu på App Store',
      headlineVerb: 'Spela in',
      words: ['enkelt', 'automatiskt', 'med kvalitet'],
      subhead: 'Spela in gitarr, sång och idéer med kvalitet. Enkelt och smidigt, men fullt av funktioner.',
      primaryCta: 'Ladda ner från App Store',
      secondaryCta: 'Se funktioner',
      mockup: {
        monitor: 'Monitor',
        session: 'Session · #3',
        recording: 'Inspelning',
        stop: 'Stoppa',
        autoRecord: 'Auto-Rec',
        tabs: ['Inspelare', 'Inspelningar', 'Info'],
      },
    },
    value: {
      eyebrow: 'Vad är Aurec',
      title: 'Aurec är en modern inspelningsapp för iPhone som låter dig spela in ljud, musik och idéer utan ansträngning.',
      body1: 'Till skillnad från enkla inspelningsappar stöder Aurec automatisk inspelning, overdub och WAV-ljudformat.',
      body2: 'Oavsett om du är musiker, student eller innehållsskapare hjälper Aurec dig att fånga idéer direkt när de uppstår.',
      screens: [
        { label: 'Inspelning med ett tryck', description: 'Börja direkt, stoppa när du vill' },
        { label: 'Spelar in automatiskt', description: 'Auto-Rec känner av ljud och startar' },
        { label: 'Smart organisering', description: 'Sessioner håller allt i ordning' },
        { label: 'Full kontroll', description: 'Proffsinställningar med ett tryck' },
      ],
      stats: [
        { value: '48 kHz', label: 'Sampling i studiokvalitet' },
        { value: '32-bit', label: 'Float-inspelningsdjup' },
        { value: '∞', label: 'Inspelningslängd' },
      ],
    },
    features: {
      eyebrow: 'Funktioner',
      title1: 'Allt du behöver.',
      title2: 'Inget onödigt.',
      items: [
        {
          title: 'Inspelning med ett tryck',
          description: 'Börja spela in direkt utan extra inställningar. Öppna appen och tryck på inspelning.',
        },
        {
          title: 'Inbyggd ljudredigerare',
          description: 'Trimma, klipp och finjustera inspelningar direkt på iPhone. Ingen dator behövs.',
        },
        {
          title: 'Auto-Rec',
          description: 'Ställ in en tystnadströskel och låt Aurec starta inspelningen automatiskt när ljud upptäcks. Du missar inte ett enda ögonblick.',
        },
        {
          title: 'Smart organisering',
          description: 'Sessioner, metadata och en tydlig lista gör inspelningarna lätta att hantera. Hitta snabbt vilken inspelning som helst.',
        },
        {
          title: 'Enkel delning och export',
          description: 'Skicka filer snabbt till Filer, AirDrop eller andra iOS-appar i det format du föredrar.',
        },
      ],
    },
    builtFor: {
      eyebrow: 'För vem',
      title1: 'En inspelare.',
      title2: 'För varje situation.',
      items: [
        {
          title: 'För musiker',
          description: 'Fånga riff och demos i samma ögonblick som inspirationen slår till. Tappa inte en idé för att utrustningen inte var redo. Spela till exempel in bandrepetitioner och spelningar med automatisk inspelning.',
        },
        {
          title: 'För poddare och videoskapare',
          description: 'Pålitlig fältinspelning utan onödig komplexitet. Fokusera på innehållet, Aurec sköter resten.',
        },
        {
          title: 'För studenter och anteckningar',
          description: 'Spela in röstanteckningar tydligt och håll dem organiserade. Dina idéer finns alltid nära till hands.',
        },
      ],
    },
    trust: {
      eyebrow: 'Byggd för iOS',
      title1: 'Designad för iPhone och iPad.',
      title2: 'Snabb, stabil, bekant.',
      intro: 'Aurec använder Apples inbyggda möjligheter för att ge en snabb, stabil och naturlig upplevelse på både iPhone och iPad.',
      items: [
        {
          title: 'Inbyggd för iPhone och iPad',
          description: 'Byggd med iOS inbyggda API:er för en snabb, stabil och välbekant upplevelse.',
        },
        {
          title: 'Inget konto krävs',
          description: 'Börja spela in redan vid första starten. Ingen registrering, ingen inlåsning i molnet.',
        },
        {
          title: 'Dina data förblir dina',
          description: 'Inspelningarna stannar på din enhet. Ingen spårning, ingen reklam.',
        },
      ],
    },
    footer: {
      links: {
        appStore: 'App Store',
        privacy: 'Integritetspolicy',
        support: 'Support',
        contact: 'Kontakt',
      },
      eyebrow: 'Kom igång',
      title: 'Börja spela in i dag',
      body: 'Ladda ner Aurec från App Store och fånga dina idéer innan de försvinner.',
      cta: 'Ladda ner från App Store',
    },
  },
  es: {
    langLabel: 'Español',
    nav: { features: 'Características', builtFor: 'Para Quién', download: 'Descargar' },
    hero: {
      badge: 'Disponible en el App Store',
      headlineVerb: 'Graba',
      words: ['fácilmente', 'automáticamente', 'con calidad'],
      subhead: 'Graba guitarra y voz, ideas, con calidad. Simple y fácil, pero lleno de funciones.',
      primaryCta: 'Descargar en el App Store',
      secondaryCta: 'Ver características',
      mockup: { monitor: 'Monitor', session: 'Sesión · #3', recording: 'Grabando', stop: 'Detener', autoRecord: 'Auto-Rec', tabs: ['Grabadora', 'Grabaciones', 'Info'] },
    },
    value: {
      eyebrow: 'Qué es Aurec',
      title: 'Aurec es una aplicación moderna de grabación para iPhone que te permite grabar audio, música e ideas sin esfuerzo.',
      body1: 'A diferencia de las aplicaciones básicas, Aurec soporta grabación automática, overdubbing y formato de audio WAV.',
      body2: 'Ya seas músico, estudiante o creador de contenido, Aurec te ayuda a capturar ideas en el momento en que aparecen.',
      screens: [
        { label: 'Grabación con un toque', description: 'Empieza al instante, deténte cuando quieras' },
        { label: 'Graba automáticamente', description: 'Auto-Rec detecta el sonido y comienza' },
        { label: 'Organización inteligente', description: 'Las sesiones mantienen todo ordenado' },
        { label: 'Control total', description: 'Ajustes profesionales a un toque' },
      ],
      stats: [
        { value: '48 kHz', label: 'Tasa de muestreo de estudio' },
        { value: '32-bit', label: 'Profundidad de grabación float' },
        { value: '∞', label: 'Duración de grabación' },
      ],
    },
    features: {
      eyebrow: 'Características',
      title1: 'Todo lo que necesitas.',
      title2: 'Nada que no necesites.',
      items: [
        { title: 'Grabación con un toque', description: 'Empieza a grabar inmediatamente sin configuración adicional.' },
        { title: 'Editor de audio integrado', description: 'Recorta, corta y pule grabaciones directamente en el iPhone.' },
        { title: 'Auto-Rec', description: 'Establece un umbral de silencio y deja que Aurec grabe automáticamente cuando se detecte sonido.' },
        { title: 'Organización inteligente', description: 'Sesiones, metadatos y una lista clara mantienen las grabaciones fáciles de gestionar.' },
        { title: 'Compartir y exportar fácil', description: 'Envía archivos rápidamente a Archivos, AirDrop u otras aplicaciones de iOS.' },
      ],
    },
    builtFor: {
      eyebrow: 'Para Quién',
      title1: 'Una grabadora.',
      title2: 'Para cada situación.',
      items: [
        { title: 'Para músicos', description: 'Captura riffs y demos en el momento en que llega la inspiración.' },
        { title: 'Para podcasters y creadores', description: 'Grabación de campo confiable sin complejidad innecesaria.' },
        { title: 'Para estudiantes y notas', description: 'Graba notas de voz con claridad y mantenlas organizadas.' },
      ],
    },
    trust: {
      eyebrow: 'Diseñado para iOS',
      title1: 'Diseñado para iPhone y iPad.',
      title2: 'Rápido, estable, familiar.',
      intro: 'Aurec aprovecha las capacidades nativas de Apple para que la experiencia se sienta rápida y natural.',
      items: [
        { title: 'Nativo en iPhone y iPad', description: 'Construido con APIs nativas de iOS para una experiencia rápida.' },
        { title: 'No requiere cuenta', description: 'Empieza a grabar desde el primer inicio. Sin registro.' },
        { title: 'Tus datos son tuyos', description: 'Las grabaciones se quedan en tu dispositivo. Sin rastreo, sin anuncios.' },
      ],
    },
    footer: {
      links: { appStore: 'App Store', privacy: 'Política de Privacidad', support: 'Soporte', contact: 'Contacto' },
      eyebrow: 'Comienza',
      title: 'Empieza a grabar hoy',
      body: 'Descarga Aurec en el App Store y captura tus ideas antes de que desaparezcan.',
      cta: 'Descargar en el App Store',
    },
  },
  de: {
    langLabel: 'Deutsch',
    nav: { features: 'Funktionen', builtFor: 'Für Wen', download: 'Laden' },
    hero: {
      badge: 'Jetzt im App Store',
      headlineVerb: 'Nimm',
      words: ['einfach auf', 'automatisch auf', 'mit Qualität auf'],
      subhead: 'Nimm Gitarre und Stimme, Ideen, mit Qualität auf. Einfach und leicht, aber voller Funktionen.',
      primaryCta: 'Im App Store laden',
      secondaryCta: 'Funktionen ansehen',
      mockup: { monitor: 'Monitor', session: 'Session · #3', recording: 'Aufnahme', stop: 'Stopp', autoRecord: 'Auto-Rec', tabs: ['Rekorder', 'Aufnahmen', 'Info'] },
    },
    value: {
      eyebrow: 'Was ist Aurec',
      title: 'Aurec ist eine moderne Sprachaufnahme-App für das iPhone, mit der du Audio, Musik und Ideen mühelos aufnehmen kannst.',
      body1: 'Im Gegensatz zu einfachen Apps unterstützt Aurec automatische Aufnahme, Overdubbing und das WAV-Format.',
      body2: 'Ob du Musiker, Student oder Content Creator bist, Aurec hilft dir, Ideen festzuhalten.',
      screens: [
        { label: 'One-Tap-Aufnahme', description: 'Sofort starten, jederzeit stoppen' },
        { label: 'Nimmt automatisch auf', description: 'Auto-Rec erkennt Ton und startet' },
        { label: 'Smarte Organisation', description: 'Sessions halten alles ordentlich' },
        { label: 'Volle Kontrolle', description: 'Profi-Einstellungen mit einem Tipp' },
      ],
    },
    features: {
      eyebrow: 'Funktionen',
      title1: 'Alles, was du brauchst.',
      title2: 'Nichts, was du nicht brauchst.',
      items: [
        { title: 'One-Tap-Aufnahme', description: 'Starte die Aufnahme sofort ohne zusätzliche Einrichtung.' },
        { title: 'Integrierter Audio-Editor', description: 'Schneide, trimme und poliere Aufnahmen direkt auf dem iPhone.' },
        { title: 'Auto-Rec', description: 'Aurec startet die Aufnahme automatisch bei Geräuschen.' },
        { title: 'Smarte Organisation', description: 'Sessions und eine übersichtliche Liste erleichtern die Verwaltung.' },
        { title: 'Einfaches Teilen & Exportieren', description: 'Sende Dateien schnell an Dateien, AirDrop oder andere Apps.' },
      ],
    },
    builtFor: {
      eyebrow: 'Für Wen',
      title1: 'Ein Rekorder.',
      title2: 'Für jede Situation.',
      items: [
        { title: 'Für Musiker', description: 'Nimm Riffs und Demos auf, wenn die Inspiration zuschlägt.' },
        { title: 'Für Podcaster', description: 'Zuverlässige Feldaufnahmen ohne unnötige Komplexität.' },
        { title: 'Für Notizen', description: 'Nimm Sprachnotizen klar auf und halte sie organisiert.' },
      ],
    },
    trust: {
      eyebrow: 'Gemacht für iOS',
      title1: 'Für iPhone und iPad.',
      title2: 'Schnell, stabil, vertraut.',
      intro: 'Aurec nutzt native Apple-Funktionen für eine schnelle Nutzung.',
      items: [
        { title: 'Nativ für iPhone & iPad', description: 'Erstellt mit nativen iOS-APIs.' },
        { title: 'Kein Konto', description: 'Starte die Aufnahme direkt beim ersten Start.' },
        { title: 'Deine Daten gehören dir', description: 'Aufnahmen bleiben auf deinem Gerät. Kein Tracking.' },
      ],
    },
    footer: {
      links: { appStore: 'App Store', privacy: 'Datenschutz', support: 'Support', contact: 'Kontakt' },
      eyebrow: 'Loslegen',
      title: 'Beginne heute mit der Aufnahme',
      body: 'Lade Aurec im App Store herunter und halte deine Ideen fest.',
      cta: 'Im App Store laden',
    },
  },
  zh: {
    langLabel: '中文',
    nav: { features: '功能', builtFor: '适用', download: '下载' },
    hero: {
      badge: '现已在 App Store 上架',
      headlineVerb: '记录',
      words: ['灵感', '声音', '每一刻'],
      subhead: '录制吉他、人声和灵感，音质出众。简单易用，但功能齐全。',
      primaryCta: '在 App Store 下载',
      secondaryCta: '查看功能',
      mockup: { monitor: '监听', session: '会话 · #3', recording: '录音中', stop: '停止', autoRecord: '自动录音', tabs: ['录音机', '录音', '信息'] },
    },
    value: {
      eyebrow: 'Aurec 是什么',
      title: 'Aurec 是一款适用于 iPhone 的现代录音应用，让您轻松录制音频。',
      body1: 'Aurec 支持自动录音、多轨叠加和 WAV 音频格式。',
      body2: '无论您是音乐家、学生还是创作者，Aurec 都能捕捉灵感。',
      screens: [
        { label: '一键录音', description: '瞬间启动，随时停止' },
        { label: '自动录音', description: '检测到声音即自动开始' },
        { label: '智能整理', description: '使用会话让一切井井有条' },
        { label: '完全控制', description: '专业设置，一触即达' },
      ],
    },
    features: {
      eyebrow: '功能',
      title1: '你所需的一切。',
      title2: '没有多余。',
      items: [
        { title: '一键录音', description: '无需额外设置即可立即开始录音。' },
        { title: '内置音频编辑器', description: '直接在 iPhone 上修剪和打磨录音。' },
        { title: '自动录音', description: '检测到声音时自动开始录音。' },
        { title: '智能整理', description: '会话、元数据和列表让录音易于管理。' },
        { title: '轻松分享与导出', description: '快速将文件发送至“文件”、AirDrop。' },
      ],
    },
    builtFor: {
      eyebrow: '适用人群',
      title1: '一款录音机。',
      title2: '适用于各种场景。',
      items: [
        { title: '音乐家', description: '在灵感闪现时捕捉灵感。' },
        { title: '播客', description: '可靠的现场录音。' },
        { title: '学生笔记', description: '清晰录制语音笔记并保持井井有条。' },
      ],
    },
    trust: {
      eyebrow: '专为 iOS 打造',
      title1: '专为 iPhone 和 iPad 设计。',
      title2: '快速、稳定。',
      intro: 'Aurec 利用 Apple 原生功能，体验极速自然。',
      items: [
        { title: 'iPhone 和 iPad 原生', description: '使用原生 iOS API 构建。' },
        { title: '无需账户', description: '首次启动即可开始录音。无需注册。' },
        { title: '数据归您所有', description: '录音保存在设备上。无跟踪，无广告。' },
      ],
    },
    footer: {
      links: { appStore: 'App Store', privacy: '隐私政策', support: '支持', contact: '联系' },
      eyebrow: '开始使用',
      title: '立即开始录音',
      body: '在 App Store 下载 Aurec，在灵感消失前捕捉它们。',
      cta: '在 App Store 下载',
    },
  },
  pt: {
    langLabel: 'Português',
    nav: { features: 'Recursos', builtFor: 'Para Quem', download: 'Baixar' },
    hero: {
      badge: 'Agora na App Store',
      headlineVerb: 'Grave',
      words: ['facilmente', 'automaticamente', 'com qualidade'],
      subhead: 'Grave guitarra e voz, ideias, com qualidade. Simples e fácil, mas cheio de recursos.',
      primaryCta: 'Baixar na App Store',
      secondaryCta: 'Ver recursos',
      mockup: { monitor: 'Monitor', session: 'Sessão · #3', recording: 'Gravando', stop: 'Parar', autoRecord: 'Auto-Rec', tabs: ['Gravador', 'Gravações', 'Info'] },
    },
    value: {
      eyebrow: 'O que é o Aurec',
      title: 'O Aurec é um moderno aplicativo de gravação de voz para iPhone que permite gravar áudio sem esforço.',
      body1: 'Ao contrário dos gravadores básicos, o Aurec suporta gravação automática, overdubbing e formato de áudio WAV.',
      body2: 'Seja você músico, estudante ou criador de conteúdo, o Aurec ajuda a capturar ideias no momento em que aparecem.',
      screens: [
        { label: 'Gravação com um toque', description: 'Comece na hora, pare a qualquer momento' },
        { label: 'Grava automaticamente', description: 'O Auto-Rec detecta som e inicia' },
        { label: 'Organização inteligente', description: 'As sessões mantêm tudo arrumado' },
        { label: 'Controle total', description: 'Configurações pro a um toque' },
      ],
    },
    features: {
      eyebrow: 'Recursos',
      title1: 'Tudo o que você precisa.',
      title2: 'Nada do que você não precisa.',
      items: [
        { title: 'Gravação com um toque', description: 'Comece a gravar imediatamente sem configuração extra.' },
        { title: 'Editor de áudio integrado', description: 'Corte e melhore as gravações diretamente no iPhone.' },
        { title: 'Auto-Rec', description: 'Defina um limite de silêncio e o Aurec começará a gravar automaticamente.' },
        { title: 'Organização inteligente', description: 'Sessões, metadados e uma lista clara facilitam o gerenciamento.' },
        { title: 'Compartilhamento fácil', description: 'Envie arquivos rapidamente para o Arquivos, AirDrop ou outros apps.' },
      ],
    },
    builtFor: {
      eyebrow: 'Para Quem',
      title1: 'Um gravador.',
      title2: 'Para cada situação.',
      items: [
        { title: 'Para músicos', description: 'Capture riffs e demos no momento em que a inspiração chega.' },
        { title: 'Para podcasters', description: 'Gravação de campo confiável sem complexidade desnecessária.' },
        { title: 'Para estudantes', description: 'Grave notas de voz com clareza e mantenha-as organizadas.' },
      ],
    },
    trust: {
      eyebrow: 'Feito para iOS',
      title1: 'Projetado para iPhone e iPad.',
      title2: 'Rápido, estável e familiar.',
      intro: 'O Aurec aproveita as capacidades nativas da Apple para uma experiência natural.',
      items: [
        { title: 'Nativo no iPhone e iPad', description: 'Criado com APIs nativas do iOS para uma experiência rápida.' },
        { title: 'Não requer conta', description: 'Comece a gravar já na primeira inicialização. Sem registros.' },
        { title: 'Seus dados são seus', description: 'As gravações ficam no seu dispositivo. Sem rastreamento.' },
      ],
    },
    footer: {
      links: { appStore: 'App Store', privacy: 'Privacidade', support: 'Suporte', contact: 'Contato' },
      eyebrow: 'Comece agora',
      title: 'Comece a gravar hoje',
      body: 'Baixe o Aurec na App Store e capture suas ideias antes que elas desapareçam.',
      cta: 'Baixar na App Store',
    },
  },
  ja: {
    langLabel: '日本語',
    nav: { features: '機能', builtFor: '対象ユーザー', download: 'ダウンロード' },
    hero: {
      badge: 'App Storeで配信中',
      headlineVerb: '録音',
      words: ['簡単に', '自動的に', '高音質で'],
      subhead: 'ギターやボーカル、アイデアを高音質で録音。シンプルで使いやすく、機能も充実。',
      primaryCta: 'App Storeでダウンロード',
      secondaryCta: '機能を見る',
      mockup: { monitor: 'モニター', session: 'セッション · #3', recording: '録音中', stop: '停止', autoRecord: '自動録音', tabs: ['レコーダー', '録音ファイル', '情報'] },
    },
    value: {
      eyebrow: 'Aurecとは',
      title: 'Aurecは、音声、音楽、アイデアを簡単に録音できる最新のiPhone用ボイスレコーダーアプリです。',
      body1: '基本的なアプリとは異なり、Aurecは自動録音、オーバーダブ、WAV形式に対応しています。',
      body2: 'ミュージシャン、学生、クリエイターなど、誰でもアイデアを瞬時にキャプチャできます。',
      screens: [
        { label: 'ワンタップ録音', description: 'すぐに開始、いつでも停止' },
        { label: '自動的に録音', description: '音を検知して自動的に開始' },
        { label: 'スマートな整理', description: 'セッションですべてを整理' },
        { label: '完全なコントロール', description: 'ワンタップでプロ設定' },
      ],
    },
    features: {
      eyebrow: '機能',
      title1: '必要なものすべて。',
      title2: '不要なものはなし。',
      items: [
        { title: 'ワンタップ録音', description: '追加設定なしですぐに録音を開始できます。' },
        { title: '内蔵オーディオエディタ', description: 'iPhone上で直接録音をトリミング・編集。' },
        { title: '自動録音', description: '音を検知すると自動的に録音を開始します。' },
        { title: 'スマートな整理', description: 'セッションやメタデータで簡単に管理できます。' },
        { title: '簡単な共有と書き出し', description: 'ファイル、AirDropなどにすばやく送信。' },
      ],
    },
    builtFor: {
      eyebrow: '対象ユーザー',
      title1: '1つのレコーダー。',
      title2: 'あらゆる状況に。',
      items: [
        { title: 'ミュージシャン', description: 'インスピレーションが湧いた瞬間に録音。' },
        { title: 'ポッドキャスター', description: '不必要な複雑さのない信頼性の高いフィールド録音。' },
        { title: '学生のノート', description: '音声メモをクリアに録音し、整理。' },
      ],
    },
    trust: {
      eyebrow: 'iOS向けに設計',
      title1: 'iPhoneとiPadのために設計。',
      title2: '高速、安定、親しみやすい。',
      intro: 'Appleのネイティブ機能を活用し、自然な操作感を実現。',
      items: [
        { title: 'iPhoneとiPadのネイティブ', description: 'ネイティブAPIを使用して構築。' },
        { title: 'アカウント不要', description: '初回起動時からすぐに録音を開始できます。' },
        { title: 'データはあなたのもの', description: '録音はデバイスに保存されます。追跡も広告もありません。' },
      ],
    },
    footer: {
      links: { appStore: 'App Store', privacy: 'プライバシーポリシー', support: 'サポート', contact: 'お問い合わせ' },
      eyebrow: '始める',
      title: '今すぐ録音を開始',
      body: 'アイデアが消える前にAurecをダウンロードしてキャプチャしましょう。',
      cta: 'App Storeでダウンロード',
    },
  },
  hi: {
    langLabel: 'हिन्दी',
    nav: { features: 'विशेषताएं', builtFor: 'किसके लिए', download: 'डाउनलोड' },
    hero: {
      badge: 'अब ऐप स्टोर पर',
      headlineVerb: 'रिकॉर्ड',
      words: ['आसानी से', 'स्वचालित रूप से', 'गुणवत्ता के साथ'],
      subhead: 'उच्च गुणवत्ता में गिटार, आवाज़ और विचारों को रिकॉर्ड करें। सरल और उपयोग में आसान, लेकिन सुविधाओं से भरपूर।',
      primaryCta: 'ऐप स्टोर से डाउनलोड करें',
      secondaryCta: 'विशेषताएं देखें',
      mockup: { monitor: 'मॉनिटर', session: 'सत्र · #3', recording: 'रिकॉर्डिंग', stop: 'रुकें', autoRecord: 'ऑटो-रिकॉर्ड', tabs: ['रिकॉर्डर', 'रिकॉर्डिंग', 'जानकारी'] },
    },
    value: {
      eyebrow: 'Aurec क्या है',
      title: 'Aurec iPhone के लिए एक आधुनिक वॉयस रिकॉर्डर है जो आपको आसानी से ऑडियो रिकॉर्ड करने देता है।',
      body1: 'बेसिक ऐप्स के विपरीत, Aurec स्वचालित रिकॉर्डिंग, ओवरडबिंग और WAV ऑडियो को सपोर्ट करता है।',
      body2: 'चाहे आप संगीतकार हों या छात्र, Aurec विचारों को तुरंत कैप्चर करने में मदद करता है।',
      screens: [
        { label: 'वन-टैप रिकॉर्डिंग', description: 'तुरंत शुरू करें, कभी भी रुकें' },
        { label: 'स्वचालित रिकॉर्डिंग', description: 'ध्वनि का पता लगाकर शुरू होता है' },
        { label: 'स्मार्ट संगठन', description: 'सत्र सब कुछ व्यवस्थित रखते हैं' },
        { label: 'पूर्ण नियंत्रण', description: 'एक टैप में प्रो सेटिंग्स' },
      ],
    },
    features: {
      eyebrow: 'विशेषताएं',
      title1: 'वह सब कुछ जो आपको चाहिए।',
      title2: 'कुछ भी अनावश्यक नहीं।',
      items: [
        { title: 'वन-टैप रिकॉर्डिंग', description: 'बिना किसी अतिरिक्त सेटअप के तुरंत रिकॉर्डिंग शुरू करें।' },
        { title: 'इनबिल्ट ऑडियो एडिटर', description: 'सीधे iPhone पर रिकॉर्डिंग ट्रिम और संपादित करें।' },
        { title: 'ऑटो-रिकॉर्ड', description: 'ध्वनि का पता चलने पर Aurec स्वचालित रूप से रिकॉर्डिंग शुरू करता है।' },
        { title: 'स्मार्ट संगठन', description: 'सत्र और स्पष्ट सूची से रिकॉर्डिंग प्रबंधित करना आसान है।' },
        { title: 'आसान शेयरिंग', description: 'फ़ाइलें, AirDrop या अन्य ऐप्स में तेज़ी से भेजें।' },
      ],
    },
    builtFor: {
      eyebrow: 'किसके लिए',
      title1: 'एक रिकॉर्डर।',
      title2: 'हर स्थिति के लिए।',
      items: [
        { title: 'संगीतकारों के लिए', description: 'प्रेरणा मिलते ही रिफ़्स और डेमो कैप्चर करें।' },
        { title: 'पॉडकास्टर्स के लिए', description: 'बिना किसी जटिलता के विश्वसनीय रिकॉर्डिंग।' },
        { title: 'छात्रों के लिए', description: 'वॉयस नोट्स को स्पष्ट रूप से रिकॉर्ड करें और व्यवस्थित रखें।' },
      ],
    },
    trust: {
      eyebrow: 'iOS के लिए निर्मित',
      title1: 'iPhone और iPad के लिए डिज़ाइन किया गया।',
      title2: 'तेज़, स्थिर, परिचित।',
      intro: 'Aurec तेज़ और प्राकृतिक अनुभव के लिए Apple की मूल क्षमताओं का उपयोग करता है।',
      items: [
        { title: 'iPhone और iPad का नेटिव', description: 'iOS के नेटिव API के साथ बनाया गया।' },
        { title: 'कोई खाता आवश्यक नहीं', description: 'बिना साइन-अप के पहली बार लॉन्च करते ही रिकॉर्डिंग शुरू करें।' },
        { title: 'आपका डेटा आपका है', description: 'रिकॉर्डिंग आपके डिवाइस पर रहती हैं। कोई विज्ञापन नहीं।' },
      ],
    },
    footer: {
      links: { appStore: 'ऐप स्टोर', privacy: 'गोपनीयता नीति', support: 'समर्थन', contact: 'संपर्क करें' },
      eyebrow: 'शुरू करें',
      title: 'आज ही रिकॉर्डिंग शुरू करें',
      body: 'ऐप स्टोर से Aurec डाउनलोड करें और विचारों के गायब होने से पहले उन्हें कैप्चर करें।',
      cta: 'ऐप स्टोर से डाउनलोड करें',
    },
  }
}
