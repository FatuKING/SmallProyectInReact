import { useState } from 'react'
import { Card } from './Card'
import { imgArray } from './imgArray'

function App () {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleCardClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <>
      <div className='container'>
        {imgArray.map((img, index) => (
          <Card
            key={index}
            img={img.img}
            name={img.name}
            onClick={() => handleCardClick(index)}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </>
  )
}

export default App
