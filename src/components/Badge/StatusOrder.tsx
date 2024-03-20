import { Box, Image, StyleProps, Text } from '@chakra-ui/react'
import React from 'react'

interface StatusOrderProps extends StyleProps {
    status: string,
}

const StatusOrder = (props: StatusOrderProps) => {
    const { status, ...restProps } = props
    let color = "";
    let text = "";

    if (status == "COMPLETED") {
        color = "#35BC3E";
    } else if (status == "PENDING" || status == "INPROGRESS") {
        color = "orange";
    } else if (
        status == "CANCELLED" ||
        status == "PARTIAL" ||
        status == "ERROR" ||
        status == "ABORT"
    ) {
        color = "red";
    }
    return (
        <Box
            bg={color}
            h={"32px"}
            borderRadius="30px"
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

export default StatusOrder;