import { useBoardsStore } from '#/stores/boards-store'
import { X } from 'lucide-react'
import styles from './add-board-dialog.module.css'
import { useRef } from 'react'

export default function AddBoardDialog() {
  const boardsState = useBoardsStore((state) => state)
  const dialodRef = useRef<HTMLDialogElement>(null)

  const handleAddBoard = () => {
    boardsState.addBoard({
      id: Date.now().toString(),
      name: `Board ${boardsState.boards.length + 1}`,
      description: `Description for Board ${boardsState.boards.length + 1}`,
    })

    dialodRef.current?.close()
  }

  return (
    <dialog ref={dialodRef} id="create-kanban-dialog">
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h1>Create New Board</h1>
            <button
              className="ghostButton iconButton"
              commandfor="create-kanban-dialog"
              command="close"
            >
              <X />
            </button>
          </div>
          <p>Initialize a new board for you or your team</p>
          <form action="" className={styles.modalForm}>
            <div className={styles.inputPair}>
              <label htmlFor="">BOARD NAME</label>
              <input />
            </div>
            <div className={styles.inputPair}>
              <label htmlFor="">DESCRIPTION (OPTIONAL)</label>
              <textarea />
            </div>
          </form>
        </div>
        <div className={`${styles.modalFooter} ${styles.modalContent}`}>
          <button
            className="ghostButton textButton"
            commandfor="create-kanban-dialog"
            command="close"
          >
            Cancel
          </button>
          <button onClick={handleAddBoard} className="primaryButton">
            Create Board
          </button>
        </div>
      </div>
    </dialog>
  )
}
