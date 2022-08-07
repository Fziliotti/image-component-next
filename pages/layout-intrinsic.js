import Image from 'next/image'
import ViewSource from '../components/view-source'
import mountains from '../public/mountains.jpg'

const Intrinsic = () => (
  <div>
    <ViewSource pathname="pages/layout-intrinsic.js" />
    <h1>Componente Image com layout=intrinsic</h1>
    <Image
      alt="Montanhas"
      src={mountains}
      layout="intrinsic"
      width={700}
      height={475}
    />
  </div>
)

export default Intrinsic
