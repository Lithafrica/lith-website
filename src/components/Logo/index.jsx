import React from 'react'
 import { AppImage } from '../AppImage'

function Logo() {
  return (
    <AppImage
      src={'/images/lith-logo.png'}
      w={'85px'}
      objectFit={'contain'}
      h={50}
    />
  )
}

export default Logo
