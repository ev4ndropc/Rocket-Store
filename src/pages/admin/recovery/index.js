import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { useEffect, useState } from 'react';

import {
  Container,
  Box,
  Button,
  Text,
  Checkbox,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  useToast,
  Select,
} from "@chakra-ui/react";

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import { FaPaperPlane, FaEnvelope, FaTelegram } from 'react-icons/fa'

import config from '../../../config'

export default function Signin () {
  const toast = useToast()
  const { locale, defaultLocale } = useRouter()

  const size = useBreakpointValue({ base: "md", sm: "md", md: 'lg', lg: 'lg' })
  const flex_direction = useBreakpointValue({ sm: 'row', base: 'column' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [rememberPassword, setRememberPassword] = useState(false)

  const { t, lang } = useTranslation('recovery')

  const handleSubmit = async () => {

  }

  const handleSetLanguage = (language) => {
    Cookies.set('NEXT_LOCALE', language)
    setLanguage(language)
  }


  return (
    <Container as={Flex} justifyContent="center" alignItems="center" flexDir="column" m="0" p="12px" maxW="100%" bgColor="secondary" w="100%" h="100vh">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/rocket-mini.png" />
        <title>{t('page_title')} - {config.default.site_name}</title>
      </Head>

      <Img mb="1rem" w={{base: '164px', md: '184px', lg: '248px'}} src="/assets/images/logo.png" />

      <Box maxW="480px" w="100%" p="24px" bgColor="white" boxShadow="md" borderRadius="md">

        <form action="" method="post">

          <Flex flexDirection="column" justifyContent="center" alignItems="center" mb="2rem">
            <Text color="gray.600" textAlign="center" fontSize={{ base: '14px', sm: '18px', md: '18px', lg: '18px' }}>
              {t('enter_your_registration_email_address_to_receive_password_reset_instructions')}
            </Text>
          </Flex>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              mt={{ base: '0', md: '0.3rem' }}
              color="primary_extra_light"
              size={size}
              children={<FaEnvelope/>}
            />
            <Input
              type="email"
              placeholder={t('type_your_email')}
              size={size}
              focusBorderColor="primary_light"
              color="gray.500"
              background="gray.100"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              isInvalid={isInvalid}
              errorBorderColor="primary_light"
            />
          </InputGroup>
          <Flex justifyContent="center" alignItems="center" mt="0.5rem" mb="0.5rem">
            <Text color="gray.500">or</Text>
          </Flex>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              mt={{ base: '0', md: '0.3rem' }}
              color="primary_extra_light"
              size={size}
              children={<FaTelegram/>}
            />
            <Input
              type="number"
              placeholder={t('your_telegram_number')}
              size={size}
              focusBorderColor="primary_light"
              color="gray.500"
              background="gray.100"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              isInvalid={isInvalid}
              errorBorderColor="primary_light"
            />
          </InputGroup>

          <InputGroup mt="1rem">
            <Button
              type="submit"
              leftIcon={<FaPaperPlane/>}
              w="100%"
              background="primary_light"
              color="white"
              onClick={handleSubmit}
              size={size}
              disabled={loading}
              isLoading={loading}
              loadingText={t('signin_dot_dot_dot')}
              _hover={{
                opacity: 0.9
              }}
            >
              {t('submit')}
            </Button>
            
          </InputGroup>
        </form>
      </Box>

      <Flex mt="1rem" maxW="480px" w="100%" justifyContent="center">
        <Flex onClick={() => handleSetLanguage('en')} mr="0.5rem" cursor="pointer">
          <Img maxW="38px" src="/assets/images/flags/en.png"/>
        </Flex>
        <Flex onClick={() => handleSetLanguage('pt')} cursor="pointer">
          <Img maxW="38px" src="/assets/images/flags/pt.png"/>
        </Flex>
        <Flex onClick={() => handleSetLanguage('es')} ml="0.5rem" cursor="pointer">
          <Img maxW="38px" src="/assets/images/flags/es.png"/>
        </Flex>
      </Flex>

    </Container>
  )
}