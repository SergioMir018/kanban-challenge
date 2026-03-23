import { useBoardsStore } from '#/stores/boards-store'
import { X } from 'lucide-react'
import styles from './add-board-dialog.module.css'
import { useRef } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

type AddBoardForm = {
  name: string
  description?: string
}

export default function AddBoardDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBoardForm>()
  const boardsState = useBoardsStore((state) => state)
  const dialodRef = useRef<HTMLDialogElement>(null)

  const onSubmit: SubmitHandler<AddBoardForm> = (data) => {
    console.log(data)

    boardsState.addBoard({
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
    })

    dialodRef.current?.close()
  }

  return (
    <dialog ref={dialodRef} id="create-kanban-dialog">
      <div className={styles.modal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h1>Create New Board</h1>
              <button
                className="ghostButton iconButton"
                onClick={() => dialodRef.current?.close()}
              >
                <X />
              </button>
            </div>
            <p>Initialize a new board for you or your team</p>
            <div className={styles.modalForm}>
              <div className={styles.inputPair}>
                <label>BOARD NAME</label>
                <input type="text" {...register('name', { required: true })} />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    The board needs a name
                  </span>
                )}
              </div>
              <div className={styles.inputPair}>
                <label>DESCRIPTION (OPTIONAL)</label>
                <textarea {...register('description')} />
              </div>
            </div>
          </div>
          <div className={`${styles.modalFooter} ${styles.modalContent}`}>
            <button
              className="ghostButton textButton"
              onClick={() => dialodRef.current?.close()}
            >
              Cancel
            </button>
            <button type="submit" className="primaryButton">
              Create Board
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}
