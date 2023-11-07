import album1 from '../assets/Album Cover/Seishun_Complex_Single_Cover_29 (1).png'
import album2 from '../assets/Album Cover/Ano_Band_Digital_Cover_29.png'
import album3 from '../assets/Album Cover/Wasurete_Yaranai_Digital_Cover_29.png'
import album4 from '../assets/Album Cover/Seiza_ni_Naretara_Digital_Cover_29.png'
import album5 from '../assets/Album Cover/Distortion21_Digital_Cover_29.png'
import album6 from '../assets/Album Cover/Kessoku_Band_Album_Cover_29.png'
import album7 from '../assets/Album Cover/Nani_ga_Warui_Digital_Cover_29.png'

import Song1Styles from '../Styles/Song-Styles/Song1Styles'
import Song2Styles from '../Styles/Song-Styles/Song2Styles'
import Song3Styles from '../Styles/Song-Styles/Song3Styles'
import Song4Styles from '../Styles/Song-Styles/Song4Styles'
import Song6Styles from '../Styles/Song-Styles/Song6Styles'
import Song7Styles from '../Styles/Song-Styles/Song7Styles'
import Song8Styles from '../Styles/Song-Styles/Song8Styles'

export const songs = [

    {
        albumCover: album1,
        alt: "Seisyun Complex (Album Cover)",
        SongName: "Seisyun Complex",
        song: "src/assets/Audio/seisyun complex.mp3",
        albumBackGround: Song1Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Seishun_Complex"
    },

    {
        albumCover: album2,
        alt: "Ano Band (Album Cover)",
        SongName: "Ano Band",
        song: "src/assets/Audio/That band.mp3",
        albumBackGround: Song2Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Ano_Band"
    },

    {
        albumCover: album3,
        alt: "Wasurete Yaranai (Album Cover)",
        SongName: "Wasurete Yaranai",
        song: "src/assets/Audio/Never forget.mp3",
        albumBackGround: Song3Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Wasurete_Yaranai"
    },

    {
        albumCover: album4,
        alt: "Seiza ni Naretara (Album Cover)",
        SongName: "Seiza ni Naretara",
        song: "src/assets/Audio/If I could be a constellation.mp3",
        albumBackGround: Song4Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Seiza_ni_Naretara"
    },

    {
        albumCover: album1,
        alt: "Hitoribocchi Tokyo (Album Cover)",
        SongName: "Hitoribocchi Tokyo",
        song: "src/assets/Audio/hitoribocchi tokyo.mp3",
        albumBackGround: Song1Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Hitoribocchi_Tokyo"
    },

    {
        albumCover: album5,
        alt: "Distortion (Album Cover)",
        SongName: "Distortion!!",
        song: "src/assets/Audio/Distortion!!.mp3",
        albumBackGround: Song6Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Distortion!!"
    },

    {
        albumCover: album6,
        alt: "Himitsu Kichi (Album Cover)",
        SongName: "Himitsu Kichi",
        song: "src/assets/Audio/Secret base.mp3",
        albumBackGround: Song7Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Himitsu_Kichi"
    },

    {
        albumCover: album7,
        alt: "Nani Ga Warui (Album Cover)",
        SongName: "Nani Ga Warui",
        song: "src/assets/Audio/What is wrong with.mp3",
        albumBackGround: Song8Styles,
        lyrics:"https://bocchi-the-rock.fandom.com/wiki/Nani_ga_Warui"
    }
]