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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

import { FaEnvelope, FaKey, FaSignInAlt } from 'react-icons/fa'

import config from '../../../config'

import Header from '../../../components/Header'

export default function Signin () {
  const toast = useToast()
  const { locale, defaultLocale } = useRouter()
  const router = useRouter()

  var timeout = null

  const size = useBreakpointValue({ base: "md", sm: "md", md: 'lg', lg: 'lg' })
  const flex_direction = useBreakpointValue({ sm: 'row', base: 'column' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [rememberPassword, setRememberPassword] = useState(false)

  const [message, setMessage] = useState('')
  const [typeMessage, setTypeMessage] = useState('')


  const { t, lang } = useTranslation('signin')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(config.base_api+'/auth/signin', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(r=>r.json())

    if(res.ok){
      setTypeMessage('success')
      setMessage('Login efetuado com sucesso!')
      clearTimeout(timeout)
      timeout = setTimeout(() => setMessage(''), 5000)
      router.push(`/${Cookies.get('NEXT_LOCALE')}/admin/dashboard`)
    }else{
      setTypeMessage('error')
      setMessage('O email ou a senha estão incorretos')
      timeout = setTimeout(() => setMessage(''), 5000)
    }

  }

  const handleSetLanguage = (language) => {
    Cookies.set('NEXT_LOCALE', language)
    setLanguage(language)
  }


  return (
    <Container as={Flex} justifyContent="center" alignItems="center" flexDir="column" m="0" p="12px" maxW="100%" bgColor="secondary" w="100%" h="100vh">

      <Header pageTitle={t('page_title')}/>

      <Img mb="1rem" w={{base: '164px', md: '184px', lg: '248px'}} src="/assets/images/logo.png" />

      <Box maxW="480px" w="100%" p="24px" bgColor="white" boxShadow="md" borderRadius="md">

        <form action="" method="post" onSubmit={handleSubmit}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Text color="gray.600" textAlign="center" fontSize={{ base: '14px', sm: '18px', md: '18px', lg: '18px' }}>
              {t('welcome_enter_your_email_and_password_and_click_enter_to_continue')}
            </Text>
          </Flex>

          <Alert opacity={message? '1' : '0' } status={typeMessage ? typeMessage : 'error'} borderRadius="md" variant="solid" mb="0.5rem">
            <AlertIcon />
            {message}
          </Alert>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              isInvalid={isInvalid}
              errorBorderColor="primary_light"
            />
          </InputGroup>

          <InputGroup mt="1rem">
            <InputLeftElement
              pointerEvents="none"
              mt={{ base: '0', md: '0.3rem' }}
              color="primary_extra_light"
              size={size}
              children={<FaKey/>}
            />
            <Input
              type="password"
              placeholder={t('type_your_password')}
              size={size}
              focusBorderColor="primary_light"
              color="gray.500"
              background="gray.100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              isInvalid={isInvalid}
              errorBorderColor="primary_light"
            />
          </InputGroup>

          <InputGroup mt="1rem">
            <Checkbox
              size={size}
              colorScheme="yellow"
              color="gray.500"
              checked={rememberPassword}
              onChange={(e) => setRememberPassword(!rememberPassword) }
              disabled={loading}
            >
              {t('remember_my_password')}
            </Checkbox >
          </InputGroup>

          <InputGroup mt="1rem">
            <Button
              type="submit"
              leftIcon={<FaSignInAlt/>}
              w="100%"
              background="primary_light"
              color="white"
              size={size}
              disabled={loading}
              isLoading={loading}
              loadingText={t('signin_dot_dot_dot')}
              _hover={{
                opacity: 0.9
              }}
            >
              {t('make_login')}
            </Button>
            
          </InputGroup>

          <Flex justifyContent="center" alignItems="center" flexDirection={flex_direction} mt="1rem" color="gray.500">
          {t('forgot_your_password')}
            <Link href="/admin/recovery">
              <Text ml="0.2rem" color="primary_light" cursor="pointer">
              {t('recovery')}
              </Text>
            </Link>
          </Flex>
        </form>
      </Box>

      <Flex mt="1rem" maxW="480px" w="100%" justifyContent="center">
        <Flex onClick={() => handleSetLanguage('en')} mr="0.5rem" cursor="pointer">
          <Img maxW="38px" borderRadius="4px" transition="all .2s" _hover={{ transform: 'scale(1.1)' }} src="/assets/images/flags/en.png"/>
        </Flex>
        <Flex onClick={() => handleSetLanguage('pt')} cursor="pointer">
          <Img maxW="38px" borderRadius="4px" transition="all .2s" _hover={{ transform: 'scale(1.1)' }} src="/assets/images/flags/pt.png"/>
        </Flex>
        <Flex onClick={() => handleSetLanguage('es')} ml="0.5rem" cursor="pointer">
          <Img maxW="38px" borderRadius="4px" transition="all .2s" _hover={{ transform: 'scale(1.1)' }} src="/assets/images/flags/es.png"/>
        </Flex>
      </Flex>

    </Container>
  )
}