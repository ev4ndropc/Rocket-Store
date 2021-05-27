import { Flex } from "@chakra-ui/layout"

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'
import { useState } from "react"

const Dashboard = () => {

  const { t, lang } = useTranslation('dashboard')

  
  const[showMenu, setShowMenu] = useState(false)

  return (
    <Flex background="white" w="100%" h="100%" position="fixed" top="0px" left="0px">
      <Header pageTitle={t('page_title')}/>

      <Flex>
        <Topbar showMenu={showMenu} setShowMenu={setShowMenu} />
      </Flex>

      <Flex>
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      </Flex>
    </Flex>
  )
}

export default Dashboard