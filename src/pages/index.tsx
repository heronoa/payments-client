import HomeLayout from '@/components/Layouts/HomeLayout'
import { Meta } from '@/layout/meta'
import Image from 'next/image'

const Home = () => {
  return (
    <>
    <Meta title={'Gerenciamento Dev - Login'} description={'Bem-vindo ao App de Gerenciamento de Desenvolvedores'} />
    <HomeLayout />
    </>
  )
}

export default Home
