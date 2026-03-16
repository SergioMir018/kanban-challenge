import { useEffect, useRef } from 'react'
import BoardActionsButton from './board-actions-button'
import styles from './board-card.module.css'
import { registerCard } from '#/lib/utils/card-position'
import MiniBoard from './mini-board'
import { Plus } from 'lucide-react'

type BoardCardProps = {
  title: string
  description: string
  boards: number
}

export default function BoardCard({
  title,
  description,
  boards,
}: BoardCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    registerCard(ref.current)
  }, [])

  return (
    <div ref={ref} className={styles.boardCard}>
      <div className={styles.boardCardHeader}>
        <h2>{title}</h2>
        <BoardActionsButton />
      </div>
      <p className={styles.boardDescription}>{description}</p>
      <div className={styles.miniBoardsContainer}>
        {Array.from({ length: boards })
          .slice(0, 4)
          .map((_, i) => (
            <MiniBoard key={i} />
          ))}
        {boards > 4 && (
          <div className={styles.remaingingBoards}>
            <Plus strokeWidth={3} /> {boards - 4}
          </div>
        )}
      </div>
    </div>
  )
}
