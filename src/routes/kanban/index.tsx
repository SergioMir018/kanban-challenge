import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kanban/')({
  component: Kanban,
})

function Kanban() {
  return <div>Hello "/kanban/"!</div>
}
