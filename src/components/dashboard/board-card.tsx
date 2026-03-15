import { useEffect, useRef } from 'react'
import BoardActionsButton from './board-actions-button'
import styles from './board-card.module.css'
import { registerCard } from '#/lib/utils/card-position'

type BoardCardProps = {
  title: string
  description: string
}

export default function BoardCard({ title, description }: BoardCardProps) {
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
    </div>
  )
}
