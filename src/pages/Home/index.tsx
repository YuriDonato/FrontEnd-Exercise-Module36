import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Listagem from '../../components/Listagem'
import { Restaurant } from '../../models/Restaurant'

import { useEffect, useState } from 'react'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <div>
      <Header page="home" />
      <Listagem restaurants={restaurantes} />
      <Footer />
    </div>
  )
}

export default Home
