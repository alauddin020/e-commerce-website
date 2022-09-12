
import Head from 'next/head'
import Anounecement from '../components/Anounecement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Product from '../components/Product'
import Slide from '../components/Slide'




export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
      <Navbar/>
      <Anounecement/>
      <Slide/>
      <Categories/>
      <Product home={true}/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
