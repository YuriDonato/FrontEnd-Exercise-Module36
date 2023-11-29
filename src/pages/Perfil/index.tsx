import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListagemPerfil from '../../components/ListagemPerfil'

import Banner from '../../components/Banner'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../../models/Restaurant'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }
  function UpperCase(texto: string) {
    const newText = texto.charAt(0).toUpperCase() + texto.slice(1)
    return newText
  }
  return (
    <>
      <Header page="perfil" />
      <Banner name={restaurant?.titulo} genre={UpperCase(restaurant?.tipo)} />
      <ListagemPerfil restaurant={restaurant} />
      <Footer />
    </>
  )
}

export default Perfil
