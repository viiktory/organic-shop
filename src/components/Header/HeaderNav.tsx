import { NavLink } from 'react-router-dom'
import { PATHS } from '@/routes/paths'

const navLinks = [
  { name: 'Home', path: PATHS.HOME },
  { name: 'About', path: PATHS.ABOUT },
  { name: 'Page', path: PATHS.PAGE },
  { name: 'Shop', path: PATHS.SHOP },
  { name: 'Project', path: PATHS.PROJECT },
  { name: 'News', path: PATHS.NEWS },
]
type Props = {
  className?: string
}

const HeaderNav = ({ className }: Props) => {
  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default HeaderNav
