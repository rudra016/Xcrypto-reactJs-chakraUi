import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import avater from "../Assets/avatar.png"

const Footer = () => {
  return (
   <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>
     <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center","flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best Crypto Info App in India, we provide our guidance at a very reasonable price.</Text>

        </VStack>
        <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={avater}/>
                <Text>Developed by</Text>
                <a href="https://github.com/rudra016">
                    <Text textAlign={["center","right"]} fontWeight={"medium"} as={"u"}>RUDRA SHARMA</Text>
                </a>
            </VStack>
     </Stack>
   </Box>
  )
}
      
export default Footer
