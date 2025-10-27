import { Link } from 'react-router-dom'
import LogoIcon from '@/assets/icons/logo.svg?react'
import CartIcon from '@/assets/icons/cart.svg?react'
import HeaderNav from './HeaderNav'
import SearchForm from '@/components/Header/SearchForm/SearchForm.tsx'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.headerNavbar}>
        <Link to="/" className={styles.headerLogo}>
          <LogoIcon />
        </Link>

        <HeaderNav className={styles.headerList} />
        <div className={styles.headerNavigation}>
          <SearchForm />
          <Link to="#">
            <CartIcon className={styles.headerCartIcon} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
