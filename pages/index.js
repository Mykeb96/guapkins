import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/images/guapkins.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Guapkins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <div className='image-wrapper'>
            <Image
              src={logo}
              height={106}
              width={160}
            />
          </div>
          <h1>Guapkins</h1>
        </header>

        <div className='bio'>
          <p>Guapkins is a Portland based producer who started making beats on FL Studio 
            in his room in 2017. <br />Since then he has been honing in his own style and improving 
            his abilities as a producer. His influences <br />include a long list of artists 
            including Future, 21 Savage, 03 Greedo and Shoreline Mafia. Guapkins’ 
            style of beats <br />tell a story, and are driving, moody and melodic. 
            He continues to improve his craft and look for new opportunities <br />to work with 
            artists any chance he gets. </p>
        </div>
        
      </main>

    </div>
  )
}
