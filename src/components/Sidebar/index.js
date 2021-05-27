import Link from "next/link"

import { Flex, ListItem, UnorderedList, Img, Text } from "@chakra-ui/react"

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import { GoHome } from 'react-icons/go'
import { BsClockHistory } from 'react-icons/bs'
import { BiTransfer, BiCog, BiShareAlt, BiAdjust, BiExit } from 'react-icons/bi'
import { IoDuplicateOutline, IoLanguage } from 'react-icons/io5'
import { ImQuestion } from 'react-icons/im'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'

import SidebarContainer from './styled'


const Sidebar = (props) => {
  const { t, lang } = useTranslation('dashboard')


  return (
    <SidebarContainer>
      <Flex className={`sidebar ${props.showMenu ? 'show' : 'hide' }`} flexDir="column" position="fixed" top="0" left="0" justifyContent="flex-start" alignItems="center" background="secondary" zIndex="999">

        <Flex className="logo" justifyContent="center" alignItems="center" mt="1rem" mb="2rem" p="1rem">
          <Img transition="all 0.5s" maxW="180px" src="/assets/images/logo.png" />
        </Flex>

        <Flex className="menu" w="100%">
            <UnorderedList listStyleType="none" w="100%" m="0px" color="white">
              <ListItem className="active" _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <GoHome size="28px"/>
                    <Text ml="1rem">{t('home')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BsClockHistory size="26px"/>
                    <Text ml="1rem">{t('orders_logs')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiTransfer size="28px"/>
                    <Text ml="1rem">{t('transactions_logs')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <IoDuplicateOutline size="26px"/>
                    <Text ml="1rem">{t('category')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <HiOutlineShoppingCart size="26px"/>
                    <Text ml="1rem">{t('services')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <FiUsers size="26px"/>
                    <Text ml="1rem">{t('customers')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <ImQuestion size="26px"/>
                    <Text ml="1rem">{t('faq')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiShareAlt size="28px"/>
                    <Text ml="1rem">{t('providers')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <IoLanguage size="28px"/>
                    <Text ml="1rem">{t('language')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiCog size="28px"/>
                    <Text ml="1rem">{t('settings')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiAdjust size="28px"/>
                    <Text ml="1rem">{t('theme_customizer')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem _hover={{ color: "primary_light" }}>
                <Link href="/">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiExit size="28px"/>
                    <Text ml="1rem">{t('logout')}</Text>
                  </Flex>
                </Link>
              </ListItem>
            </UnorderedList>
        </Flex>
      </Flex>
    </SidebarContainer>

  )
}

export default Sidebar