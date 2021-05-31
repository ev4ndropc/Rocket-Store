import { Flex, Wrap, WrapItem, Avatar, Text, Img } from "@chakra-ui/react"

import TopbarContainer from './styled'

const Topbar = (props) => {

  const handleChangeMenu = () => {
    props.setShowMenu(!props.showMenu)
  }

  return (

    <TopbarContainer>
      <Flex className={`topbar ${props.showMenu ? 'show' : 'hide' }`} w="100%" position="fixed" top="0px" background="secondary" p="1rem" justifyContent="space-between" alignItems="center">
        
        <Flex className="container-logo" alignItems="center" w="100%" maxW="320px" justifyContent="space-between">
          <Flex className="logo" justifyContent="center" alignItems="center" p="1rem">
            <Img transition="all 0.5s" maxW="140px" src={`/assets/images/logo.png`} />
          </Flex>
          <Flex className="hamburger" onClick={handleChangeMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </Flex>
        </Flex>
        <Flex>
          <Wrap>
            <WrapItem>
              <Flex>
                <Avatar name="Evandro Pinheiro" src="https://bit.ly/dan-abramov" />
                <Flex ml="0.5rem" flexDir="column">
                  <Text color="white" fontWeight="700">Evandro</Text>
                  <Text color="gray.400" fontSize="12px">Super Admin</Text>
                </Flex>
              </Flex>
            </WrapItem>
          </Wrap>
        </Flex>

      </Flex>
    </TopbarContainer>
  )
}

export default Topbar