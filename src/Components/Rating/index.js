import { useEffect, useState } from 'react'
import api from '../../Services/ApiProducts'
import { useParams } from 'react-router-dom'
import './style.css'

function Rating() {
  const [rating, setRating] = useState([])
  const { id } = useParams()

  const [profile, setProfile] = useState([])
  const [newArray, setNewArray] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const commentsResponse = await api.get('/comments', {
          params: { limit: 100 }
        })
        const usersResponse = await api.get('/users', {
          params: { limit: 100 }
        })

        setRating(commentsResponse.data.comments)
        setProfile(usersResponse.data.users)

        const mappedData = commentsResponse.data.comments.map(comment => {
          const userProfile = usersResponse.data.users.find(
            user => user.id === comment.user.id
          )
          return {
            ...comment,
            id: userProfile,
            userName: userProfile ? userProfile.username : 'Não localizado'
          }
        })

        setNewArray(mappedData)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [id])

  const resFilter = newArray.filter(item => item.postId === Number(id))


  return (
    <div>
      <h2>Avaliações dos clientes</h2>
      <div id="container-comments">
        {resFilter.length > 0 ? (
          <div>
            {resFilter.map(item => (
              <div className="card-comments" key={item.id}>
                <div>
                  <div className="img-comments">
                    <img src={item.id.image} alt={item.id.firstName} />
                    <span>{item.id.firstName} </span>
                  </div>
                </div>
                <div className="description-comments">{item.body}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>Nenhuma avaliação!</div>
        )}
      </div>
    </div>
  )
}

export default Rating
