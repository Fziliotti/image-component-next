import Image from 'next/image'
import ViewSource from '../components/view-source'
import mountains from '../public/mountains.jpg'

const Fill = () => (
  <div>
    <ViewSource pathname="pages/layout-fill.js" />
    <h1>Componente Image com layout=fill</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image alt="montanhas" src={mountains} layout="fill" objectFit="cover" />
    </div>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="montanhas"
        src={mountains}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image
        alt="montanhas"
        src={mountains}
        layout="fill"
        objectFit="none"
        quality={100}
      />
    </div>
  </div>
)

export default Fill
