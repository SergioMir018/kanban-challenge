import BoardActionsButton from './board-actions-button'
import styles from './board-card.module.css'

type BoardCardProps = {
  title: string
  description: string
}

export default function BoardCard({ title, description }: BoardCardProps) {
  return (
    <div className={styles.boardCard}>
      <div className={styles.boardCardHeader}>
        <h2>{title}</h2>
        <BoardActionsButton />
      </div>
      <p className={styles.boardDescription}>{description}</p>
    </div>
  )
}
