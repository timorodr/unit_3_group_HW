import {Link} from "react-router-dom"

function Main() {
  return (
    <nav className="nav">
      <Link to='/'>
        <div>Bookmark</div>
      </Link>
    </nav>
  )
}

export default Main;
