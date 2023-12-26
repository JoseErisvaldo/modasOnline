import './style.css'
function Header() {
  return (
    <div id="container-nav">
      <div className="cards-nav">
        <h1>Modas.Online</h1>
        <input type="text" placeholder="Busque aqui"></input>
      </div>
      <div className="cards-nav">
        <div className="login">
          <i class="bx bxs-user-circle"></i>
          <div>Faça LOGIN ou crie seu CADASTRO</div>
        </div>
        <div className="boxicons">
          <i class="bx bx-headphone"></i>
          <i class="bx bxs-heart"></i>
          <i class="bx bxs-cart"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
