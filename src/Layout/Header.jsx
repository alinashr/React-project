import { Login, Logout, Movie, MovieCreation, PersonAdd, Search, ShoppingBag} from '@mui/icons-material'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../api/api'
import { useSelector } from 'react-redux'

const Header = () => {
    // let path=useLocation()
    // let pathname=path.pathname

    let {pathname} = useLocation()
    let active = "text-black text-2xl"


    // ^-start
    // $-end
    let home = pathname.match(/^[/]$/)?active:''
    let  movies = pathname.match(/^[/]movies/) ?active:''
    let  series = pathname.match(/^[/]series/) ?active:''
    let  search = pathname.match(/^[/]search/) ?active:''

    let navigte=useNavigate()

    let cart_items = useSelector(store=>store.cartStore.cart_items)
    let len = cart_items.length

    const handleLogout = (e) =>{
      e.preventDefault()
      localStorage.removeItem('userInfo')
      navigte('/')
    }

    // console.log(path)
  return (
    <>
      <div className="flex justify-between p-5 bg-slate-500 text-slate-100">
        <h1>MOVIES CENTRAL</h1>

        <div className="icons w-1/4 flex justify-evenly">
        {
          isLoggedIn()?
          <>
            <button><Link to ='/cart'><ShoppingBag/>
            {
              len>0 && len
            }
            </Link></button>
            <button onClick={handleLogout}><Logout/></button>
          </>
          :
          <>
          <Link to={'/login'}><Login/>Login</Link>
          <Link to={'/register'}><PersonAdd/>Register</Link>
          </>
          }
        </div>
      </div>

      <div className="flex bg-slate-700 text-slate-50 justify-evenly p-5 header">
        <Link to='/' className={home}>Home</Link>
        <Link to='/movies' className={movies}><Movie/>Movies</Link>
        <Link to='/series'  className={series} ><Movie/>Series</Link>
        <Link to='/search'  className={search}><Search/>Search</Link>
      </div>
    </>
  )
}

export default Header




