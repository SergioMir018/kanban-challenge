import { Plus } from 'lucide-react'
import '../../styles.css'
import styles from './add-board-button.module.css'

export default function AddBoardButton() {
  return (
    <button
      className={`primaryButton ${styles.addButton}`}
      commandfor="create-kanban-dialog"
      command="show-modal"
    >
      <Plus size={20} /> <span>Create Board</span>
    </button>
  )
}
