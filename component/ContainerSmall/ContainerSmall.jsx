import { Container } from "@chakra-ui/react"

const ContainerSmall = ({children}) => {
  return (
    <Container maxW="1050px">
        {children}
    </Container>
  )
}

export default ContainerSmall;