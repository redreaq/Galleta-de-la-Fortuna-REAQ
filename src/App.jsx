import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utils/arrImages.json'

function App() {
   
  const initialValue = getRandomFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialImage = getRandomFromArray(arrImages)
  const [imageSelected, setImageSelected] = useState(initialImage)

  const objStyle= {
    backgroundImage: `url("/fondo${imageSelected}.jpg")`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app_title'>Galleta de la Fortuna</h1>
      <article className='app__card'>
        <PhraseCard phraseRandom={phraseRandom} />
        <BtnPhrase 
        setPhraseRandom={setPhraseRandom} 
        setImageSelected={setImageSelected}
        />
      </article>
    </div> 
  )
}

export default App
