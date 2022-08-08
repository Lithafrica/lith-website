import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
function TextUnderline({ color , lineColor , children , ...rest}) {
  return (
    <Box
      as={'span'}
      color={color || useColorModeValue('green.400', 'green.300')}
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
        bg: lineColor || useColorModeValue('green.100', 'green.900'),
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  )
}

export default TextUnderline
