import SearchIcon from '@/assets/icons/search-icon.svg?react'
import styles from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input type="text" placeholder="Search ..." className={styles.searchInput} />
      <button type="submit">
        <SearchIcon className={styles.searchIcon} />
      </button>
    </form>
  )
}

export default SearchForm
