import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorCom = ({message}) => {
  return (
   <Alert status='error' position={"fixed"} bottom={"4"} left={"50%"} transform={"translatetX(-50%)"} w={"container.lg"}>
    <AlertIcon/>
    {message}
   </Alert>
  )
}

export default ErrorCom