import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
const About = () => {
    return (
        <>
        <Stack bgColor="#F0F3F6" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
                    <Heading color="#19388A" mb="24px">
                    About TDS Telecom
                    </Heading>
                        <Text>
                        TDS Telecom (TDS®) provides innovative voice, internet, entertainment services, and leading-edge business technology for customers in hundreds of rural and suburban communities nationwide. For more than 50 years, the ISP has been connecting customers with reliable, high-quality products and services while centering on delighting customers.
                        <br/><br/>
                        Today, TDS Telecom are a growing force in the broadband entertainment and cable industry and remain 100 percent committed to championing economic development and broadband innovation in all the communities we serve. 
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/about-tds-telecom-image.jpg" alt="About Image TDS Telecom" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About