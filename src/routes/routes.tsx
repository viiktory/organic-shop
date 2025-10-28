import { Layout } from '@/components'
import { Home } from '@/pages'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
  },
]
