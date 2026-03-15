import { Link } from '@tanstack/react-router'
import { LayoutDashboard, SquareKanban, Settings } from 'lucide-react'
import styles from './dock.module.css'

const sections = [
  {
    name: 'Dashboard',
    icon: <LayoutDashboard size={18} />,
    href: '/dashboard',
  },
  {
    name: 'Board',
    icon: <SquareKanban size={18} />,
    href: '/kanban',
  },
  {
    name: 'Settings',
    icon: <Settings size={18} />,
    href: '/settings',
  },
]

export default function Dock() {
  return (
    <nav className={styles.dock}>
      {sections.map((section) => (
        <Link
          key={section.name}
          to={section.href}
          className={styles.link}
          activeProps={{ className: `${styles.active}` }}
          viewTransition={true}
        >
          {section.icon}
          {section.name}
        </Link>
      ))}
    </nav>
  )
}
