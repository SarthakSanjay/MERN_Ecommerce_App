import {Link} from 'react-router-dom'
const Filter = () => {
  return (
    <div className="filter">
      <ul>
        <li className='list'>
        <Link to='/all'>
        ALL
        </Link>
        </li>

        <li className='list'>Electronics</li>
        <li className='list'>Food</li>
        <li className='list'>Gym</li>
        <li className='list'>
        <Link to="/addProducts">
        Add
        </Link>
        </li>

        
        
      </ul>
    </div>
  )
}

export default Filter