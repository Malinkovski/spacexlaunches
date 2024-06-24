import { Spin } from 'antd'
import React from 'react'
import styles from './spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.loading}>
    <Spin size="large" />
  </div>
  )
}

export default Spinner;