import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children}) {
  return <div className={styles.container}>
    <nav className={styles.header}>
      <Link href="/"><a>Home</a></Link>
      <Link href="/future-log">Future Log</Link>
    </nav>
    {children}
    </div>
}