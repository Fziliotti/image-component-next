import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles.module.css'

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <Image
        alt="montanhas"
        src="/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={bgText}>
      Componente Image
      <br />
      usado como Background
    </p>
  </div>
)

export default Background
