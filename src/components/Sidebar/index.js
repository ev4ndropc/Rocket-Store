import Link from "next/link"
import { useRouter } from 'next/router'

import { Flex, ListItem, UnorderedList, Img, Text } from "@chakra-ui/react"

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import { GoHome } from 'react-icons/go'
import { BsClockHistory } from 'react-icons/bs'
import { BiTransfer, BiCog, BiShareAlt, BiAdjust, BiExit } from 'react-icons/bi'
import { IoDuplicateOutline, IoLanguage, IoGridOutline } from 'react-icons/io5'
import { ImQuestion } from 'react-icons/im'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'

import SidebarContainer from './styled'



const Sidebar = (props) => {
  const router = useRouter()

  const path = router.pathname.replace('/admin/', '')
  console.log(path)

  const { t, lang } = useTranslation('common')

  return (
    <SidebarContainer>
      <Flex className={`sidebar ${props.showMenu ? 'show' : 'hide' }`} flexDir="column" position="fixed" top="0" left="0" justifyContent="flex-start" alignItems="center" background="secondary" zIndex="999">
        <Flex className="menu" w="100%">
            <UnorderedList listStyleType="none" w="100%" m="0px" color="white">
              <ListItem className={path == 'dashboard' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <GoHome size="28px"/>
                    <Text ml="1rem">{t('home')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'orders_logs' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BsClockHistory size="26px"/>
                    <Text ml="1rem">{t('orders_logs')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'transactions_logs' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiTransfer size="28px"/>
                    <Text ml="1rem">{t('transactions_logs')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'social_networks' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/social_networks">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <IoGridOutline size="26px"/>
                    <Text ml="1rem">{t('social_networks')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'category' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/category">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <IoDuplicateOutline size="26px"/>
                    <Text ml="1rem">{t('category')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'services' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <HiOutlineShoppingCart size="26px"/>
                    <Text ml="1rem">{t('services')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'customers' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <FiUsers size="26px"/>
                    <Text ml="1rem">{t('customers')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'faq' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <ImQuestion size="26px"/>
                    <Text ml="1rem">{t('faq')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'providers' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiShareAlt size="28px"/>
                    <Text ml="1rem">{t('providers')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'language' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <IoLanguage size="28px"/>
                    <Text ml="1rem">{t('language')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'settings' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiCog size="28px"/>
                    <Text ml="1rem">{t('settings')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'theme_customizer' ? 'active' : '' } _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
                  <Flex className="menu-item" w="100%" alignItems="center" pl="10%">
                    <BiAdjust size="28px"/>
                    <Text ml="1rem">{t('theme_customizer')}</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem className={path == 'logout' ? 'active' : '' } pb="80px" _hover={{ color: "primary_light" }}>
                <Link href="/admin/dashboard">
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