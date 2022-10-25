import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
function TextUnderline({ color , lineColor , children , ...rest}) {
  const textColor1 = useColorModeValue('green.400', 'green.300')
  const textColor2 = useColorModeValue('green.100', 'green.900')
  return (
    <Box
      as={'span'}
      color={color || textColor1}
      position={'relative'}
      zIndex={10}
      {...rest}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        w: 'full',
        h: '10%',
        bg: lineColor || textColor2,
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  )
}

export default TextUnderline
