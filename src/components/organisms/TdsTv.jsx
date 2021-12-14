import React from 'react'
import { Flex, Box, Heading, AspectRatio, Stack, Text, List, ListIcon, ListItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'

const TdsTv = () => {
    return (
        <>
        <Stack bgColor="#F0F3F6" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
            
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading color="#19388A" mb="24px">
            TDS TV 
            </Heading>
            <Text>TDS provides the best in home entertainment with our all-digital TV packages, which include cloud DVR options, lots of HD channels, TV Everywhere, On Demand and more.</Text>
            <List py="3" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Many Channel Packages 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Voice Remote 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Bundled Savings
                </ListItem>
            </List>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["100%","100%","100%","100%","50%"]} mt="0 !important" justify="flex-start">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/tds-tv-tds-telecom-image.jpg" alt="TDS TV Image TDS Telecom" />
        </AspectRatio>
        </Flex>
        </Stack>
        </>
    )
}

export default TdsTv
