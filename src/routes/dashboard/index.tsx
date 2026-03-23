import { createFileRoute } from '@tanstack/react-router'
import styles from './dashboard.module.css'
import Header from '#/components/common/header'
import AddBoardButton from '#/components/dashboard/add-board-button'
import { useBoardsStore } from '#/stores/boards-store'
import BoardCard from '#/components/dashboard/board-card'
import { useGlobalMouseLight } from '#/lib/hooks/use-mouse-light'
import AddBoardDialog from '#/components/dashboard/add-board-dialog'

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
})

function Dashboard() {
  useGlobalMouseLight()
  const boards = useBoardsStore((state) => state.boards)

  return (
    <main className={styles.mainContent}>
      <Header title="Active Boards" titleSubtext="Overview">
        <AddBoardButton />
      </Header>
      <AddBoardDialog />
      <section className={styles.boardsContainer}>
        {boards.map((board, i) => (
          <BoardCard
            key={board.id}
            title={board.name}
            description={board.description}
            boards={i + 1}
          />
        ))}
      </section>
    </main>
  )
}
