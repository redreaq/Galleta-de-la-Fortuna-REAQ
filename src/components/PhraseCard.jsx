import './styles/PhraseCard.css'

const PhraseCard = ({ phraseRandom }) => {
    
    const { phrase } = phraseRandom
    
    return(
        <p className="card__phrase">{phrase}</p>
    )
}

export default PhraseCard