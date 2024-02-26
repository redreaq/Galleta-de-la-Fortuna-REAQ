import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './styles/BtnPhrase.css'
const BtnPhrase = ({setPhraseRandom, setImageSelected}) => {

    const handleClick = () => {
        const phrase = getRandomFromArray(phrases)
        setPhraseRandom(phrase)

        const background = getRandomFromArray(arrImages)
        setImageSelected(background)

    }

    return(
        <button className="card__btn" onClick={handleClick}>Prueba tu Suerte</button>
    )
}

export default BtnPhrase