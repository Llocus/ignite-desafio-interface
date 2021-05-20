/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import { Flex, Image, Text } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'

interface TravelTypesProps {
  icon: string
  text: string
}

export default function TravelTypes({ icon, text }: TravelTypesProps) {
  const isWhideVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isWhideVersion ? (
        <Image src={`/icons/${icon}.svg`} w="85px" h="85" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  )
}
