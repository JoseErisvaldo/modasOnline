import { useEffect, useState } from 'react'
import './style.css'
import CardsFavorite from '../../Components/CardsFavorite'

function Favorite() {
  const [listFavorite, setListFavorite] = useState([])
  useEffect(() => {
    const local = localStorage.getItem('@listFavoriteModas')
    const verLocal = JSON.parse(local) || []
    setListFavorite(verLocal)
  }, [])

  function handleExcluir(id) {
    const filterFavorite = listFavorite.filter(item => item.id !== id)

    localStorage.setItem('@listFavoriteModas', JSON.stringify(filterFavorite))
    setListFavorite(filterFavorite)
    console.log(listFavorite)
  }

  return (
    <div>
      <h1> Lista de favoritos</h1>
      <h3 id="total-items">Total de produtos: {listFavorite.length}</h3>
      <div id="container-favorite">
        {listFavorite.length > 0 ? (
          listFavorite.map(item => (
            <CardsFavorite
              key={item.id}
              thumbnail={item.thumbnail}
              description={item.description}
              price={item.price}
              excluir={() => handleExcluir(item.id)}
            />
          ))
        ) : (
          <p>Nenhum item na nos favorito !</p>
        )}
      </div>
    </div>
  )
}

export default Favorite
