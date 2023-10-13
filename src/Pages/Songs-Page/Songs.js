import album1 from '../../assets/Album Cover/Seishun_Complex_Single_Cover_29 (1).png'
import album2 from '../../assets/Album Cover/Ano_Band_Digital_Cover_29.png'
import album3 from '../../assets/Album Cover/Wasurete_Yaranai_Digital_Cover_29.png'
import album4 from '../../assets/Album Cover/Seiza_ni_Naretara_Digital_Cover_29.png'

import Song1Styles from '../../Styles/Song-Styles/Song1Styles'
import Song2Styles from '../../Styles/Song-Styles/Song2Styles'
import Song3Styles from '../../Styles/Song-Styles/Song3Styles'
import Song4Styles from '../../Styles/Song-Styles/Song4Styles'

export const songs = [

    {
        albumCover: album1,
        SongName: "Seisyun Complex",
        song: "src/assets/Audio/seisyun complex.mp3",
        albumBackGround: Song1Styles
    },

    {
        albumCover: album2,
        SongName: "Ano Band",
        song: "src/assets/Audio/That band.mp3",
        albumBackGround: Song2Styles
    },

    {
        albumCover: album3,
        SongName: "Wasurete Yaranai",
        song: "src/assets/Audio/Never forget.mp3",
        albumBackGround: Song3Styles
    },

    {
        albumCover: album4,
        SongName: "Seiza ni Naretara",
        song: "src/assets/Audio/If I could be a constellation.mp3",
        albumBackGround: Song4Styles
    }

]