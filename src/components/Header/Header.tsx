import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'
import { IoIosClose } from 'react-icons/io'
import LogoIcon from '@/assets/icons/logo.svg?react'
import CartIcon from '@/assets/icons/cart.svg?react'
import { HeaderNav, SearchForm } from '@/components'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__navbar} container`}>
        <Link to="/" className={styles.header__logo}>
          <LogoIcon />
        </Link>

        <button
          onClick={handleOpen}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={styles.header__btn}
        >
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>

        <HeaderNav className={`${styles.header__list} ${isOpen ? styles.active : ''}`} />

        <div className={styles.header__actions}>
          <SearchForm />
          <Link to="#">
            <CartIcon className={styles.header__cart_icon} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
