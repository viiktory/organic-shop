import { NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Page', path: '/page' },
  { name: 'Shop', path: '/shop' },
  { name: 'Project', path: '/project' },
  { name: 'News', path: '/news' },
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
