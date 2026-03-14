import type { PropsWithChildren } from 'react'
import styles from './header.module.css'

type HeaderProps = {
  title: string
  titleSubtext: string
}

export default function Header({
  title,
  titleSubtext,
  children,
}: PropsWithChildren<HeaderProps>) {
  return (
    <header className={styles.header}>
      <p>{titleSubtext}</p>
      <div className={styles.headerTitle}>
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  )
}
