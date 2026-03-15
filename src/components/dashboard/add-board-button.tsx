import { Plus } from 'lucide-react'
import '../../styles.css'
import styles from './add-board-button.module.css'
import { useBoardsStore } from '#/stores/boards-store'

export default function AddBoardButton() {
  const boardState = useBoardsStore((state) => state)

  const handleAddBoard = () => {
    boardState.addBoard({
      id: Date.now().toString(),
      name: `Board ${boardState.boards.length + 1}`,
      description: `Description for Board ${boardState.boards.length + 1}`,
    })
  }

  return (
    <button
      onClick={handleAddBoard}
      className={`primaryButton ${styles.addButton}`}
    >
      <Plus size={20} /> <span>Create Board</span>
    </button>
  )
}
