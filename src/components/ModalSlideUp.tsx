import { Box, Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface ModalSlideUp extends ModalProps {
  headerContent?: ReactNode,
  headerContentLeft?: ReactNode,
  title?: string,
  cardNoGap?: boolean
}



const ModalSlideUp = (props: ModalSlideUp) => {
  const { children, headerContent, headerContentLeft, title, cardNoGap, ...restProps } = props
  return (
    <Modal
      isCentered
      motionPreset='slideInBottom'
      closeOnOverlayClick={true}
      {...restProps}
    >
      <ModalOverlay />
      <ModalContent borderTopRadius="20px">
        <Flex px="20px" py={4} alignItems="center">
          <Flex alignItems="center" mr="auto">
            {!!headerContentLeft && <Box ml="auto" >{headerContentLeft}</Box>}
          </Flex>
          {!!headerContent && <Box ml="auto" >{headerContent}</Box>}
        </Flex>
        <ModalBody

          px={cardNoGap ? 0 : "20px"}
        >
          <Divider />
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalSlideUp