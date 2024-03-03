import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilHome,
  cilSpreadsheet,
  cilCloudDownload,
  cilFilterPhoto,
  cilCommentBubble,
  cilGift,
  cilMoney,
  cilSettings,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Tutorial',
  },
  {
    component: CNavItem,
    name: 'Pengenalan',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rumusan Sistem',
    to: '/dashboard',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pemasangan Sistem',
    to: '/dashboard',
    icon: <CIcon icon={cilCloudDownload} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Web Awam Masjid',
  },
  {
    component: CNavItem,
    name: 'Laman Utama',
    to: '/dashboard',
    icon: <CIcon icon={cilFilterPhoto} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Peti Cadangan',
    to: '/dashboard',
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Web AJK Masjid',
  },
  {
    component: CNavItem,
    name: 'Modul Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Modul Khairat',
    to: '/dashboard',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Modul Tabung',
    to: '/dashboard',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Modul Cadangan',
    to: '/dashboard',
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Modul Tetapan Masjid',
    to: '/dashboard',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
