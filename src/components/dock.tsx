import { useRouterState } from '@tanstack/react-router'
import { LayoutDashboard, SquareKanban, Settings } from 'lucide-react'

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
  const currentPath = useRouterState();
  return (
    <nav className="dock">
      {sections.map((section) => {
        return (
          <a
            key={section.name}
            href={section.href}
            className={
              currentPath.location.pathname.includes(section.href)
                ? 'active'
                : ''
            }
          >
            {section.icon}
            {section.name}
          </a>
        )
      })}
    </nav>
  )
}
