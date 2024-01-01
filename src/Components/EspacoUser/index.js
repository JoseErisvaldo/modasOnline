import { Link } from 'react-router-dom'
import './style.css'
function EspacoUser() {
  return (
    <div>
      <h1>Meu Espaço</h1>
      <div id="card-espaco">
        <div id="container-my-espaco">
          <div className="my-orders">
            <div className="title-orders">
              <h3>Seus pedidos</h3>
              <i class="bx bx-cube-alt"></i>
            </div>
            <br></br>
            <h4>
              <Link to={'/meuespaco/meuspedidos'} className="link-pedidos">
                Acompanhe seus pedidos
              </Link>
            </h4>
            <br></br>
            <h6>
              {' '}
              <Link className="link-boleto">
                Imprimir 2ª via do boleto bancário
              </Link>
            </h6>
          </div>
          <div className="my-service">
            <div className="title-orders">
              <h3>Serviços</h3>
              <i class="bx bx-phone"></i>
            </div>
            <p>
              {' '}
              <Link className="link-dados"> Solicitar troca e devoluções </Link>
            </p>
            <p>
              <Link className="link-dados">Central de atendimento</Link>
            </p>
            <p>
              <Link className="link-dados">Favoritos</Link>
            </p>
          </div>
          <div className="manage-buy">
            <div className="title-orders">
              <h3>Gerenciar Compra</h3>
              <i class="bx bx-cart"></i>
            </div>
            <p>
              <Link className="link-dados">
                Endereços de entrega e cartões de crédito
              </Link>
            </p>
          </div>
          <div className="my-cadastro">
            <div className="title-orders">
              <h3>Seu cadastro</h3>
              <i class="bx bx-user"></i>
            </div>
            <p>
              <Link className="link-dados">Alterar seus dados cadastrais</Link>
            </p>
            <p>
              <Link className="link-dados">Alterar seu e-mail de acesso</Link>
            </p>
            <p>
              <Link className="link-dados">Alterar senha</Link>
            </p>
            <p>
              <Link className="link-dados">Seus endereços de entrega</Link>
            </p>
            <p>
              <Link className="link-dados">
                Gerenciar o recebimento de ofertas por e-mail ou SMS
              </Link>
            </p>
          </div>
          <div className="avaliacao-comment">
            <div className="title-orders">
              <h3>Avaliações e comentários</h3>
              <i class="bx bx-heart"></i>
            </div>
            <p>Suas avaliações</p>
            <p>Seus comentários</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EspacoUser
