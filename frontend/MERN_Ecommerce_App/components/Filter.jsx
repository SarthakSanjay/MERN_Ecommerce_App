import {Link} from 'react-router-dom'
const Filter = () => {
  return (
    <div className="filter">
      <ul>
        <Link to='/all'>
        <li>ALL</li>

        </Link>
        <li>Electronics</li>
        <li>Food</li>
        <li>Gym</li>
        <Link to="/addProducts">
        <li>Add</li>

        </Link>
        
        
      </ul>
    </div>
  )
}

export default Filter