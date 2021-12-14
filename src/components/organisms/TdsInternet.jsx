import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListIcon, ListItem  } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'

const TdsInternet  = () => {
    return (
        <>
        <Stack bgColor="#fff" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#19388A" mb="24px">
                    TDS Internet
                    </Heading>
                        <Text>
                        TDS is your choice when it comes to reliable high-speed Internet and premium Wi-Fi – including fiber packages with speeds up to 1Gbps in select areas. 
                        </Text>
                        <List py="3" textAlign="start" color="#000000" spacing={1}>
                        <ListItem>
                            <ListIcon as={CheckIcon}  />
                            30-Day Money-Back Guarantee 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} />
                            Up to 1Gig Internet Speeds 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} />
                            Premium Services
                        </ListItem>
                    </List>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/tds-internet-tds-telecom-image.jpg" alt="TDS Internet Image TDS Telecom" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default TdsInternet