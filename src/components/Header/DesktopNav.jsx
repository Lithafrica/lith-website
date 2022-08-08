import {
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { NAV_ITEMS } from './navData'

import React from 'react'

export function DesktopNav(props) {
  return (
    <Stack direction={'row'} spacing={4} {...props}>
      {NAV_ITEMS.map((navItem) => {
        return (
          <Link
            key={navItem.link}
            p={2}
            href={navItem.link ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={useColorModeValue('gray.600', 'gray.200')}
            _hover={{
              textDecoration: 'none',
              color: useColorModeValue('gray.800', 'white'),
            }}
          >
            {navItem.label}
          </Link>
        )
      })}
    </Stack>
  )
}
