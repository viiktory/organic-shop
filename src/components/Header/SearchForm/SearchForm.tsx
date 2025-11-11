import SearchIcon from '@/assets/icons/search-icon.svg?react'
import styles from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <form className={styles.search}>
      <input type="text" placeholder="Search ..." className={styles.search__input} />
      <button type="submit">
        <SearchIcon className={styles.search__icon} />
      </button>
    </form>
  )
}

export default SearchForm
