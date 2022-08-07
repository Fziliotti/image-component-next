import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ViewSource from '../components/view-source'
import vercel from '../public/vercel.png'

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/index.js" />
    <div className={styles.card}>
      <h1>Componente Image com Next.js</h1>
      <p>
      Esta página demonstra o uso do componente{' '}
        <a href="https://nextjs.org/docs/api-reference/next/image">
          next/image
        </a>{' '}
        com exemplos ao vivo.
      </p>
      <p>
      Este componente é projetado para{' '}
        <a href="https://nextjs.org/docs/basic-features/image-optimization">
          otimizar automaticamente
        </a>{' '}
        as imagens sob demanda conforme o navegador as solicita.
      </p>
      <hr className={styles.hr} />
      <h2 id="layout">Layout</h2>
      <p>
        A propriedade <Code>layout</Code>  diz à imagem para responder de forma diferente dependendo do tamanho do dispositivo ou do tamanho do container.
      </p>
      <p>
       Selecione um layout abaixo e tente redimensionar a janela ou girar seu dispositivo para ver como a imagem reage.
      </p>
      <ul>
        <li>
          <Link href="/layout-intrinsic">
            <a>layout="intrinsic"</a>
          </Link>
        </li>
        <li>
          <Link href="/layout-responsive">
            <a>layout="responsive"</a>
          </Link>
        </li>
        <li>
          <Link href="/layout-fixed">
            <a>layout="fixed"</a>
          </Link>
        </li>
        <li>
          <Link href="/layout-fill">
            <a>layout="fill"</a>
          </Link>
        </li>
        <li>
          <Link href="/background">
            <a>background demo</a>
          </Link>
        </li>
      </ul>
      <hr className={styles.hr} />
      <h2 id="placeholder">Placeholder</h2>
      <p>
        A propriedade <Code>placeholder</Code> informa à imagem o que fazer durante o carregamento.
      </p>
      <p>
      Opcionalmente, você pode ativar um placeholder desfocado enquanto a imagem de alta resolução é carregada.
      </p>
      <p>
      Experimente abaixo (talvez seja necessário desabilitar o cache nas ferramentas de desenvolvimento para ver o efeito caso você ja visite o link):
      </p>
      <ul>
        <li>
          <Link href="/placeholder">
            <a>placeholder="blur"</a>
          </Link>
        </li>
        <li>
          <Link href="/shimmer">
            <a>placeholder="blur" com brilho animado blurDataURL</a>
          </Link>
        </li>
        <li>
          <Link href="/color">
            <a>placeholder="blur" com cor sólida blurDataURL</a>
          </Link>
        </li>
      </ul>
      <hr className={styles.hr} />
      <h2 id="internal">Imagem interna</h2>
      <p>
        Veja a seguir um exemplo de referência a uma imagem interna do diretório{' '}
        <Code>public</Code>.
      </p>
      <p>
       Esta imagem é intencionalmente grande, então você precisa rolar para baixo até a próxima imagem.
      </p>
      <Image alt="Vercel logo" src={vercel} width={1000} height={1000} />
      <hr className={styles.hr} />
      <h2 id="external">Imagem externa</h2>
      <p>
        Veja a seguir um exemplo de referência a uma imagem externa disponível em{' '}
        <Code>assets.vercel.com</Code>.
      </p>
      <p>
        Os domínios externos devem ser configurados no arquivo <Code>next.config.js</Code> utilizando
        a propriedade <Code>domains</Code>.
      </p>
      <Image
        alt="Next.js logo"
        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
        width={1200}
        height={400}
        
      />
      <hr className={styles.hr} />
      <h2 id="more">Saiba mais</h2>
      <p>
        Opcionalmente, você pode configurar um provedor de nuvem, tamanhos de dispositivos e muito mais!
      </p>
      <p>
        Confira a {' '}
        <a href="https://nextjs.org/docs/basic-features/image-optimization">
          documentação oficial do componente Image
        </a>{' '}
        para aprender mais.
      </p>
    </div>
  </div>
)

export default Index
