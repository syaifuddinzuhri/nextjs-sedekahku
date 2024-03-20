import { extendTheme } from '@chakra-ui/react'
import { m } from 'framer-motion'
import Container from './components/Container';
import Modal from './components/Modal';
import Checkbox from './components/Checkbox';


const breakpoints = ["30em", "48em", "62em", "80em"];


const theme = extendTheme({
  breakpoints: {
    base: breakpoints[0],
    sm: breakpoints[1],
    md: breakpoints[2],
    lg: breakpoints[3],
  },
  fonts: {
    heading: `Poppins`,
    body: `Poppins`,
  },
  Text: {
    baseStyle: {
      fontSize: "14px"
    }
  },
  colors: {
  },
  sizes: {
    container: "768px"
  },
  components: {
    Container,
    Modal,
    Checkbox,
    Text: {
      baseStyle: {
        fontSize: "14px"
      }
    },
  }
})

export default theme