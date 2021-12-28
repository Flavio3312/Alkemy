import React from 'react';
import { Flex, Text, Divider } from '@chakra-ui/react';
/**
 * Not logged is a generic message to set screen if user not logged.
 * @name NotLogged
 * @component
 * @category Utils
 * @example
 * <NotLogged />
 * @returns Return a component of React.
 */
const NotLogged = () => (
  <Flex direction='column'>
    <Text
      align='center'
      fontSize={{ base: '24px', sm: '20px', md: '52px', lg: '84px' }}
    >
      Bienvenido a la Aplicacion de Finanzas Personales
    </Text>
    <Divider />
    <Text
      align='center'
      fontSize={{ base: '24px', sm: '20px', md: '52px', lg: '84px' }}
    >
      
      Inicie sesión en la aplicación. Para empezar a usarlo.
    </Text>
  </Flex>
);

export default NotLogged;
