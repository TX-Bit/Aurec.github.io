export const APP_STORE_URL = 'https://apps.apple.com/us/app/aurec/id6759679586'

export const LOCALES = ['en', 'fi', 'fr', 'sv']

export const localeNames = {
  en: 'English',
  fi: 'Suomi',
  fr: 'Français',
  sv: 'Svenska',
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
  if (path === '/fi' || path.startsWith('/fi/')) return 'fi'
  if (path === '/fr' || path.startsWith('/fr/')) return 'fr'
  if (path === '/sv' || path.startsWith('/sv/')) return 'sv'

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
}
