import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { bestOf, newArrivals, comingSoon } from './data/itemData'
import CarouselItem from '../components/carousel-item'
import Carousel from '../components/carousel'

export default function Home() {
  let carouselData = [
    {active: true, title: "Best of", items: bestOf},
    {active: false, title: "New Arrivals", items: newArrivals},
    {active: false, title: "Coming soon", items: comingSoon}
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Carousel Demo</title>
        <meta name="description" content="Carousel demo nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Carousel carouselData={carouselData}/>
      </main>
    </div>
  )
}
