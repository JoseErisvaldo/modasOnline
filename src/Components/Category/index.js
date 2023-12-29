import { useEffect, useState } from 'react'
import api from '../../Services/ApiProducts'
import { Link } from 'react-router-dom'
import './style.css'
function Category() {
  const [listCategory, setList] = useState([])
  useEffect(() => {
    async function loadingCategory() {
      await api
        .get('/products/categories', {
          params: {
            limit: 100
          }
        })
        .then(response => {
          setList(response.data)
        })
    }
    loadingCategory()
  }, [])
  const listCategoryUpper = listCategory.map(item => {
    return item.toUpperCase()
  })
  return (
    <div className="category">
      {listCategoryUpper.map(item => (
        <div key={item}>
          <Link className="link-category" to={`/category/${item}`}>
            {item}
        </Link>
        </div>
      ))}
    </div>
  )
}

export default Category
