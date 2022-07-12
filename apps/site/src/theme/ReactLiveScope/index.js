import * as ManonUI from '@manon/ui'
// import styles from '@manon/ui/dist/index.css'
import * as utils from '@manon/utils'

import React from 'react'
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  // ...styles,
  ...ManonUI,
  ...utils,
}
export default ReactLiveScope
