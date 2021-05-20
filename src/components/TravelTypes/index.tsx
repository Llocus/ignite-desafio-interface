import { Flex } from '@chakra-ui/react'
import TravelTypesItem from './TravelTypesItem'

export default function TravelTypes() {
  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      px="16"
      mt="32"
      mb="16"
      flexWrap="wrap"
    >
      <TravelTypesItem icon="cocktail" text="Vida noturna" />
      <TravelTypesItem icon="surf" text="Praia" />
      <TravelTypesItem icon="building" text="Moderno" />
      <TravelTypesItem icon="museum" text="Clássico" />
      <TravelTypesItem icon="earth" text="e mais..." />
    </Flex>
  )
}
