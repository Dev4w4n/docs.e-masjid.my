import React from 'react'

const Pengenalan = React.lazy(() => import('./views/pengenalan/Pengenalan'))
const Rumusan = React.lazy(() => import('./views/rumusan/Rumusan'))
const AkanDatang = React.lazy(() => import('./views/akandatang/AkanDatang'))
const Pemasangan = React.lazy(() => import('./views/pemasangan/Pemasangan'))


const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', name: 'Pengenalan', element: Pengenalan },
  { path: '/rumusan', name: 'Rumusan', element: Rumusan },
  { path: '/akandatang', name: 'Akan Datang', element: AkanDatang },
  { path: '/pemasangan', name: 'Pemasangan', element: Pemasangan },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
