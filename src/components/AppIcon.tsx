import { Image, StyleProps } from '@chakra-ui/react'
import React from 'react'

interface AppIconProps extends StyleProps {
  src: string,
  subPath?: string
}

const AppIcon = (props: AppIconProps) => {
  const { src, subPath, ...restProps } = props
  return (
    <Image
      src={`/assets/icons/${subPath ? subPath + "/" : ""}${src}.svg`}
      alt="App Icon"
      {...restProps}
    />
  )
}

export default AppIcon;