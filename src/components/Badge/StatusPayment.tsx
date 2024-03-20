import { Box, Image, StyleProps, Text } from '@chakra-ui/react'
import React from 'react'

interface StatusPaymentProps extends StyleProps {
    status: string,
}

const StatusPayment = (props: StatusPaymentProps) => {
    const { status, ...restProps } = props
    let color = "";
    let text = "";

    if (status == "PAID") {
        color = "#35BC3E";
    } else if (status == "PENDING" || status == "WAITING") {
        color = "orange";
    } else if (
        status == "CANCEL" ||
        status == "CANCELLED" ||
        status == "FRAUD"
    ) {
        color = "red";
    }
    return (
        <Box
            bg={color}
            h={"32px"}
            borderRadius="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color={"white"}
        >
            <Text fontWeight="medium" fontFamily="Poppins" color="#white" fontSize={"13px"}>
                {status}
            </Text>
        </Box>
    )
}

export default StatusPayment;