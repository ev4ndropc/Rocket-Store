import { useEffect, useState } from "react"

import {
  Flex,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  Text,
  Button,
  Checkbox,
  Badge,
  IconButton,
  ScaleFade,
  useDisclosure,
  Img
} from "@chakra-ui/react"

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import { FiEdit, FiPlusSquare } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { BiCheck } from 'react-icons/bi'

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'
import Content from '../../../components/Content'

import config from '../../../config'


const SocialNetworks = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { t, lang } = useTranslation('social_networks')

  const [showMenu, setShowMenu] = useState(false)

  const [data, setData] = useState([])

  useEffect(() => {

    const getData = async () => {
      var data = await fetch(config.base_api + '/social_networks/list').then(r => r.json())
      setData(data.data)
    }
    getData()

  }, [])

  return (
    <Flex background="white" w="100%" h="100%" position="fixed" top="0px" left="0px">
      <Header pageTitle={t('page_title')} />

      <Flex>
        <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
      </Flex>

      <Flex>
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      </Flex>

      <Content showMenu={showMenu} setShowMenu={setShowMenu}>

        <Flex w="100%" flexDir="column">
          <Flex w="100%" justifyContent="space-between" mb="0.5rem">

            <Flex>
              <Button
                background="primary_light"
                color="white"
                leftIcon={<FiPlusSquare />}
                _hover={{
                  opacity: 0.9
                }}
              >
                Adicionar novo
              </Button>
            </Flex>

            <Flex position="relative" zIndex="9999">
              <Flex>
                <Button background="#ffffff" onClick={onToggle} rightIcon={<MdArrowDropDown />}>A????es</Button>
              </Flex>
              <Flex>
                <ScaleFade initialScale={0.9} in={isOpen}>
                  <Flex
                    background="#fff"
                    p="18px"
                    color="white"
                    top="42px"
                    position="absolute"
                    right="0px"
                    rounded="md"
                    shadow="md"
                    flexDir="column"
                    w="100%"
                    minW="200px"
                    color="gray.600"
                  >
                    <Flex cursor="pointer" mb="0.5rem"><AiOutlineDelete color="red" size="24px" />
                      <Text ml="0.5rem">Deletar</Text>
                    </Flex>
                    <Flex cursor="pointer" mb="0.3rem"><AiOutlineDelete color="red" size="24px" />
                      <Text ml="0.5rem">Deletar inativos</Text>
                    </Flex>
                    <Flex cursor="pointer" mb="0.2rem"><IoMdClose color="orange" size="24px" />
                      <Text ml="0.5rem">Desativar</Text>
                    </Flex>
                    <Flex cursor="pointer"><BiCheck color="green" size="24px" />
                      <Text ml="0.5rem">Ativar</Text>
                    </Flex>
                  </Flex>
                </ScaleFade>
              </Flex>
            </Flex>

          </Flex>

          <Flex className="container-table" overflowX="scroll">
            {data == '' &&
              <Flex w="100%" justifyContent="center" alignItems="center" mt="2rem" flexDir="column">
                <Img maxW="120px" src="/assets/images/ofm-nofiles.png"/>
                <Text mt="1rem">Nenhum dado para mostrar</Text>
              </Flex>
            }
            {data != '' &&
              <Table variant="simple" p="24px" bg="#ffffff" borderRadius="md" boxShadow="md" colorScheme="facebook">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>No.</Th>
                    <Th>Name</Th>
                    <Th>Sorting</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(social_network => (
                    <Tr key={social_network.id}>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>{social_network.id}</Td>
                      <Td>{social_network.name}</Td>
                      <Td>{social_network.sort}</Td>
                      <Td>
                        <Badge variant="solid" colorScheme={social_network.status == 1 ? 'green' : 'red'}>
                          {social_network.status == 1 ? 'Ativo' : 'Desativado'}
                        </Badge>
                      </Td>
                      <Td minW="136px">
                        <IconButton mr="0.25rem" colorScheme="blue" aria-label="Edit" variant="outline" icon={<FiEdit />} />
                        <IconButton ml="0.25rem" colorScheme="red" aria-label="Delete" variant="outline" icon={<AiOutlineDelete />} />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            }
          </Flex>


        </Flex>

      </Content>
    </Flex>
  )
}

export default SocialNetworks