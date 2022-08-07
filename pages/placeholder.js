import Image from 'next/image'
import ViewSource from '../components/view-source'
import mountains from '../public/mountains.jpg'

const PlaceholderBlur = () => (
  <div>
    <ViewSource pathname="pages/placeholder.js" />
    <h1>Componente Image com placeholder=blur</h1>
    <Image
      alt="montanhas"
      src={mountains}
      placeholder="blur"
      width={700}
      height={475}
    />
  </div>
)

export default PlaceholderBlur
