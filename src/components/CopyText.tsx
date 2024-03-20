import React from 'react'
import { Box, Text, useToast } from '@chakra-ui/react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

type CopyTextProps = {
    text: string
}

const CopyText = (props: CopyTextProps) => {
    const { text } = props
    const toast = useToast()

    return (
        <CopyToClipboard
            text={text}
            onCopy={() => {
                toast.closeAll()
                toast({
                    position: "top",
                    title: 'Berhasil menyalin text.',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            }}
        >
            <Text
                fontFamily="Poppins" color="#35BC3E"
                cursor={"pointer"}
            >
                Salin
            </Text>
        </CopyToClipboard>
    )
}

export default CopyText