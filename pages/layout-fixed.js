import Image from 'next/image'
import ViewSource from '../components/view-source'
import mountains from '../public/mountains.jpg'

const Fixed = () => (
  <div>
    <ViewSource pathname="pages/layout-fixed.js" />
    <h1>Componente Image com layout=fixed</h1>
    <Image
      alt="montanhas"
      src={mountains}
      layout="fixed"
      width={700}
      height={475}
    />
  </div>
)

export default Fixed
