import React from 'react'
import styles from './demo.module.scss'

interface DemoProps {
  children: React.ReactNode
  title: string
  background?: string
}

const Demo: React.FC<DemoProps> = (props): JSX.Element => {
  const { children, title, background } = props
  return (
    <div className={styles['demoBlock']}>
      <h1 className={styles['demoBlock__title']}>{title}</h1>
      <div
        className={styles['demoBlock__content']}
        style={{ backgroundColor: background }}
      >
        {children}
      </div>
    </div>
  )
}

export default Demo
