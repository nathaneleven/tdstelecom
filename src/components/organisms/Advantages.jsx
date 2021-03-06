import React from 'react'
import { Box, SimpleGrid, Heading, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import { CheckIcon } from '@chakra-ui/icons'

const Advantages = () => {
    return (
<>
<Box bgColor="#F0F3F6" align="center" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">What you get with Mediacom</Heading>

    <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
      
    <Flex bg="#fff" p="5" align="center" direction="column" >
    <Box py="15px"><svg xmlns="http://www.w3.org/2000/svg" width="70.406" height="52.966" viewBox="0 0 70.406 52.966">
  <g id="Icon_Wifi_blk" transform="translate(-0.3 -2.099)">
    <path id="Path_8694" data-name="Path 8694" d="M69.425,24.847a1.263,1.263,0,0,1-1.058-.587c-1.3-1.991-13.257-19.452-33.7-19.452h-.008C17.07,4.685,5.653,17.561,2.572,21.51a1.237,1.237,0,0,1-1.805.184,1.406,1.406,0,0,1-.175-1.906,50.843,50.843,0,0,1,10.225-9.771A43.9,43.9,0,0,1,21.16,4.482a38.613,38.613,0,0,1,28.082.538,44.792,44.792,0,0,1,10.94,6.565,51.417,51.417,0,0,1,10.3,11.141,1.4,1.4,0,0,1-.33,1.883A1.23,1.23,0,0,1,69.425,24.847Z"/>
    <path id="Path_8695" data-name="Path 8695" d="M54.5,29.481a1.21,1.21,0,0,1-.96-.487,30.554,30.554,0,0,0-6.49-6.022,25.846,25.846,0,0,0-14.905-4.864c-12.495.137-20.2,9.55-21.039,10.623a1.184,1.184,0,0,1-1.761.159A1.434,1.434,0,0,1,9.2,26.982c.913-1.17,9.318-11.436,22.928-11.582h.012a27.06,27.06,0,0,1,9.193,1.618,30.711,30.711,0,0,1,7.064,3.673,32.814,32.814,0,0,1,7.064,6.57,1.433,1.433,0,0,1-.16,1.907A1.187,1.187,0,0,1,54.5,29.481Z" transform="translate(3.044 2.962)"/>
    <path id="Path_8696" data-name="Path 8696" d="M47.76,37.655a1.351,1.351,0,0,1-1.02-.462c-1.46-1.669-6.862-7.1-15.074-6.985-3.519.057-8.789,1.2-13.9,6.315l-.059.059A1.354,1.354,0,0,1,15.8,34.667l.057-.057A25.6,25.6,0,0,1,20.932,30.6a21.141,21.141,0,0,1,22.646.377,24.342,24.342,0,0,1,5.2,4.431,1.354,1.354,0,0,1-1.018,2.246Z" transform="translate(3.369 6.036)"/>
    <path id="Path_8697" data-name="Path 8697" d="M33.636,41.023l-4.468,4.468L24.7,41.023c.406-2.573,2.166-3.52,4.468-3.52C31.47,37.368,33.095,38.451,33.636,41.023Z" transform="translate(6.653 9.574)"/>
  </g>
</svg>
</Box>
      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Mediacom Internet</Heading>
            <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Plans starting at $19.99/mo.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Speeds up to 1000 Mbps
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Internet Security included
                </ListItem>
            </List>
    </Flex>

    <Flex bg="#fff" p="5" align="center" direction="column" >
    <Box py="15px"><svg xmlns="http://www.w3.org/2000/svg" width="69.873" height="51.236" viewBox="0 0 69.873 51.236">
  <path id="Union_1" data-name="Union 1" d="M8485.971,4222.235a1.223,1.223,0,0,1-1.169-1.128,1.46,1.46,0,0,1,1.311-1.69l21.615-5.495v-.238l.034-1.812h.845v1.86a5.719,5.719,0,0,1-.12.892l-.03.126-22.181,5.66c-.674.122-.639.392-.62.544s.086.292.4.292a1.784,1.784,0,0,0,.317-.039l22.2-3.8a10.765,10.765,0,0,1,1.347-.056c.52,0,1.015.013,1.468.047h.07l21.919,3.8a1.632,1.632,0,0,0,.322.039c.311,0,.379-.174.4-.292s.054-.4-.613-.541l-22.191-5.66-.03-.131a5.142,5.142,0,0,1-.105-.744v-2.007h.871l.032,1.793c0,.075,0,.152,0,.227l21.641,5.521a1.453,1.453,0,0,1,1.268,1.69,1.212,1.212,0,0,1-1.268,1.124,2.351,2.351,0,0,1-.475-.056l-21.921-3.8h-.144c-.391-.039-.813-.039-1.233-.039-.529,0-1.031.021-1.506.056l-21.9,3.8a2.052,2.052,0,0,1-.455.052Zm58.635-10.417-68.605-.03V4171h69.873v40.819Zm-67.338-1.3,67.338-.081v-38.168h-67.338Z" transform="translate(-8476 -4171)"/>
</svg>
</Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Mediacom TV</Heading>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Up to 170+ channels
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    On-the-go Xtream TV app
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No standalone TV plans
                </ListItem>
      </List>
    </Flex>

    <Flex bg="#fff" p="5" align="center" direction="column" >
    <Box py="15px"><svg xmlns="http://www.w3.org/2000/svg" width="83.757" height="67.691" viewBox="0 0 83.757 67.691">
  <g id="Group_2247" data-name="Group 2247" transform="translate(-1271.003 -2363.6)">
    <g id="phone-alt-solid" transform="translate(1332.116 2397.271)">
      <path id="Path_8698" data-name="Path 8698" d="M3.887,279.3h14.5a2.159,2.159,0,0,1,.321.024l1.917.261a2.344,2.344,0,0,1,2.022,2.313v9.117a2.768,2.768,0,0,1-2.213,2.708l-1.42.288a3.074,3.074,0,0,1-.641.067H3.737a2.378,2.378,0,0,1-.705-.1l-1.2-.344A2.5,2.5,0,0,1,0,291.218V282a2.427,2.427,0,0,1,1.991-2.389l1.479-.268A1.845,1.845,0,0,1,3.887,279.3Zm14.483,13.992a2.3,2.3,0,0,0,.481-.05l1.424-.289a1.981,1.981,0,0,0,1.583-1.938V281.9a1.556,1.556,0,0,0-1.342-1.535l-1.924-.262a1.39,1.39,0,0,0-.209-.016H3.887a1.123,1.123,0,0,0-.257.029l-1.5.272A1.642,1.642,0,0,0,.785,282v9.215a1.714,1.714,0,0,0,1.255,1.656l1.216.348a1.632,1.632,0,0,0,.481.07Z" transform="translate(0 -261.021)"/>
      <path id="Path_8699" data-name="Path 8699" d="M83.926,6H90.8a2.16,2.16,0,0,1,1.027.262l.465.255A2.137,2.137,0,0,1,93.4,8.389v25.6a2.6,2.6,0,0,1-.955,2.016l-.164.137a3.088,3.088,0,0,1-1.963.707H84.149a2.376,2.376,0,0,1-1.787-.812l-.38-.438a2.342,2.342,0,0,1-.582-1.538V8.474a2.256,2.256,0,0,1,.91-1.806l.34-.255A2.183,2.183,0,0,1,83.926,6Z" transform="translate(-76.073 -5.607)" fill="#fff"/>
      <path id="Path_8699_-_Outline" data-name="Path 8699 - Outline" d="M78.319,0h6.872a2.559,2.559,0,0,1,1.215.309l.467.256a2.525,2.525,0,0,1,1.31,2.216v25.6a2.984,2.984,0,0,1-1.1,2.32l-.16.134a3.493,3.493,0,0,1-2.216.8H78.541a2.764,2.764,0,0,1-2.082-.946l-.381-.44a2.724,2.724,0,0,1-.678-1.795V2.867A2.662,2.662,0,0,1,76.467.746l.34-.255A2.569,2.569,0,0,1,78.319,0Zm6.387,30.851a2.7,2.7,0,0,0,1.714-.617l.161-.135a2.2,2.2,0,0,0,.815-1.715V2.781a1.74,1.74,0,0,0-.9-1.527L86.029,1a1.769,1.769,0,0,0-.838-.213H78.319a1.783,1.783,0,0,0-1.047.338l-.334.251a1.873,1.873,0,0,0-.753,1.492V28.456a1.941,1.941,0,0,0,.485,1.279l.381.44a1.978,1.978,0,0,0,1.49.676Z" transform="translate(-70.465 0)"/>
      <g id="Group_2246" data-name="Group 2246" transform="translate(6.44 2.808)">
        <path id="Path_8700" data-name="Path 8700" d="M100.278,42.9h5.877a1.257,1.257,0,0,1,.268.029l.664.129a1.36,1.36,0,0,1,1.09,1.328v5.89a1.581,1.581,0,0,1-1.117,1.5l-.448.132a1.7,1.7,0,0,1-.5.075h-5.851a1.479,1.479,0,0,1-.552-.107l-.407-.164a1.444,1.444,0,0,1-.9-1.333V44.425a1.4,1.4,0,0,1,1.037-1.354l.5-.131A1.306,1.306,0,0,1,100.278,42.9Zm5.831,8.3a.937.937,0,0,0,.274-.041l.452-.133a.789.789,0,0,0,.556-.749v-5.89a.565.565,0,0,0-.458-.558l-.671-.13a.512.512,0,0,0-.108-.012h-5.877a.559.559,0,0,0-.139.012l-.5.132a.617.617,0,0,0-.453.6V50.38a.659.659,0,0,0,.413.606l.4.162a.7.7,0,0,0,.259.05Z" transform="translate(-98.4 -42.9)"/>
      </g>
    </g>
    <g id="Icon_Wifi_blk" transform="translate(1304.664 2363.6)">
      <path id="Path_8694" data-name="Path 8694" d="M42.611,15.288a.784.784,0,0,1-.648-.34C41.17,13.793,33.849,3.67,21.337,3.67h-.005C10.565,3.6,3.576,11.063,1.691,13.353a.785.785,0,1,1-1.212-1A30.463,30.463,0,0,1,6.738,6.69a27.4,27.4,0,0,1,6.33-3.209,24.864,24.864,0,0,1,17.189.312,27.768,27.768,0,0,1,6.7,3.806,30.424,30.424,0,0,1,6.3,6.459.785.785,0,0,1-.646,1.23Z" transform="translate(-0.3 -2.099)"/>
      <path id="Path_8695" data-name="Path 8695" d="M37.552,23.564a.783.783,0,0,1-.6-.282A18.626,18.626,0,0,0,32.87,19.79,17.179,17.179,0,0,0,23.5,16.97a18.458,18.458,0,0,0-13.22,6.159.785.785,0,0,1-1.2-1.014A20.114,20.114,0,0,1,23.493,15.4H23.5a18.286,18.286,0,0,1,5.777.938,20.626,20.626,0,0,1,8.877,5.938.785.785,0,0,1-.6,1.288Z" transform="translate(-2.149 -4.959)"/>
      <path id="Path_8696" data-name="Path 8696" d="M34.161,33.387a.783.783,0,0,1-.591-.268,11.8,11.8,0,0,0-8.739-4.049,11.513,11.513,0,0,0-8.057,3.661l-.034.034a.785.785,0,0,1-1.11-1.11l.033-.033A14.844,14.844,0,0,1,18.607,29.3a12.256,12.256,0,0,1,13.13.219,14.112,14.112,0,0,1,3.015,2.569.785.785,0,0,1-.59,1.3Z" transform="translate(-3.547 -7.561)"/>
      <path id="Path_8697" data-name="Path 8697" d="M29.881,39.539l-2.59,2.59-2.59-2.59A2.3,2.3,0,0,1,27.29,37.5,2.292,2.292,0,0,1,29.881,39.539Z" transform="translate(-5.547 -9.71)"/>
    </g>
    <path id="Union_2" data-name="Union 2" d="M8472.646,4184.948a.837.837,0,0,1-.8-.773,1,1,0,0,1,.895-1.158l14.8-3.763v-.162l.023-1.242h.577v1.273a3.5,3.5,0,0,1-.081.611l-.02.087-15.191,3.876c-.459.083-.436.267-.423.372s.058.2.273.2a1.229,1.229,0,0,0,.216-.025l15.207-2.6a7.824,7.824,0,0,1,.925-.036c.354,0,.694.008,1,.032h.049l15.011,2.6a.964.964,0,0,0,.22.026c.214,0,.261-.12.273-.2s.036-.275-.421-.37l-15.2-3.876-.019-.09a3.354,3.354,0,0,1-.073-.51v-1.374h.6l.023,1.227a.83.83,0,0,0,0,.156l14.817,3.78a1,1,0,0,1,.867,1.158.826.826,0,0,1-.867.769,1.536,1.536,0,0,1-.325-.036l-15.012-2.6h-.1c-.265-.025-.556-.025-.846-.025-.361,0-.705.013-1.03.036l-15,2.6a1.522,1.522,0,0,1-.31.037Zm40.154-7.136-46.985-.02V4149.86h47.853v27.952Zm-46.115-.891,46.115-.056v-26.138h-46.115Z" transform="translate(-7194.812 -1753.658)"/>
  </g>
</svg>
</Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Mediacom Bundles</Heading>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Bundles starting at $29.99/mo.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Double & Triple Play options 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Wide variety of packages
                </ListItem>
      </List>
    </Flex>

  </SimpleGrid>

</Box>
</>
    )}

export default Advantages