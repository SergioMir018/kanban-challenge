import { createFileRoute } from '@tanstack/react-router'
import styles from './dashboard.module.css'
import Header from '#/components/common/header'
import AddBoardButton from '#/components/dashboard/add-board-button'
import { useBoardsStore } from '#/stores/boards-store'

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
})

function Dashboard() {
  const boards = useBoardsStore((state) => state.boards)

  return (
    <main className={styles.mainContent}>
      <Header title="Active Boards" titleSubtext="Overview">
        <AddBoardButton />
      </Header>
      {boards.map((board) => (
        <div key={board.id}>{board.name}</div>
      ))}
    </main>
  )
}
