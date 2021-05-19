import Banner from '@/components/Banner'
import Header from '@/components/Header'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
    </Flex>
  )
}
