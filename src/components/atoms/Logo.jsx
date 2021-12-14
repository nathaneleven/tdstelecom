import React from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const LogoHeader = () => {
  return (
    <>
    <Box>
      <Link href="/"><Image h="34.79px" src="/tds-telecom-logo.svg"/></Link>
    </Box>
    </>
  )
}

export default LogoHeader
