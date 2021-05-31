import { Flex } from '@chakra-ui/react'
import ContentContainer from './styled'


const Content = (props) => {
  return (
    <ContentContainer >
      <Flex className={`content ${props.showMenu ? 'show' : 'hide' }`}>
        {props.children}
      </Flex>
    </ContentContainer>
  )
}

export default Content