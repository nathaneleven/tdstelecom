import React from 'react'
import { Box, SimpleGrid, Heading, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#F0F3F6" pb="30 !important" p={{base:"20", md:"0 20 "}}>
    <Heading color="#19388a" mb="10">TDS plans and deals</Heading>

  <SimpleGrid columns={{base:"1", lg:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="#19388a" color="#fff" w="100%" p="5">
        <Heading as="h3" fontSize="2xl">Internet + Voice</Heading>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Flex align="start" color="#19388a" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">72</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Lorem ipsum dolor sit
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Proin egestas tempor justo
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Lorem ipsum dolor sit
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="#19388a" color="#fff" w="100%" p="5">
        <Heading as="h3" fontSize="2xl">Internet + Security</Heading>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Flex align="start" color="#19388a" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">116</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >95</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Lorem ipsum dolor sit
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Proin egestas tempor justo
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Lorem ipsum dolor sit
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" boxShadow="2xl" bgColor="#fff" align="center" direction="column" >
      <Box bgColor="#19388a" color="#fff" w="100%" p="5">
        <Heading as="h3" fontSize="2xl">Internet + Voice + Security</Heading>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Flex align="start" color="#19388a" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box fontSize="94px" mt="-25px">121</Box>
          <Box direction="column">
              <Box fontSize="43px" textAlign="start" mb="-18px" >95</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Lorem ipsum dolor sit
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Proin egestas tempor justo
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Lorem ipsum dolor sit
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default Plans