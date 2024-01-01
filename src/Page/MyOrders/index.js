import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import api from '../../Services/ApiProducts'
function MyOrders() {
  const userLogado = 97
  const [listOrders, setOrders] = useState([])
  useEffect(() => {
    async function loadingMyOrders() {
      await api
        .get('/carts', {
          params: {
            limit: 100
          }
        })
        .then(response => {
          setOrders(response.data.carts)
        })
    }
    loadingMyOrders()
  }, [])

  const filterUser = listOrders.filter(item => item.userId === userLogado)
  console.log(filterUser)
  return (
    <div id="container-my-orders">
      <Link className="return-meu-espaco" to={'/meuespaco'}>
        <i class="bx bx-chevron-left"></i>
      </Link>
      <div className="cards-my-orders">
        <div className="card-dados-user-orders">
          <div className="name-user-order">Olá, José</div>
          <div className="title-my-order">Meus pedidos</div>
        </div>
        <div className="title-filtro-order">
          <div className="title-order">
            <div>Meus pedidos nos últimos 3 meses</div>
            <div>Período Últimos 3 meses</div>
          </div>
          {filterUser.map(order => (
            <div className="cards-total-orders" key={order.id}>
              <div>
                <p>Vendido e entregue por: Modas.Online</p>
              </div>
              {order.products.map(product => (
                <div className="dados-my-order" key={product.id}>
                  <div className="img-order">
                    <img src={product.thumbnail} />
                  </div>
                  <div>{product.id}</div>
                  <div className='title-orders'>{product.title}</div>
                  <div> Qtd: {product.quantity}</div>
                  <div>Unitario: R$: {product.price}</div>
                  <div>Total: R$: {product.price * product.quantity}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyOrders
