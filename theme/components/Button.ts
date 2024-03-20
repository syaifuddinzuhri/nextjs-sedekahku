import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    width: "100%",
    fontSize: "14px",
    color: "white",
    fontWeight: 500,
    transition: "0.3s ease-out",
    opacity: 1,
    background: "linear-gradient(292.27deg, #e80979 0%, #f8ce16 100%)",
    borderRadius: "8px",
    _hover: {
      _disabled: {
        background: "linear-gradient(292.27deg, #e80979 0%, #f8ce16 100%)",
      },
    },
  },
  sizes: {
    xs: {
      height: "32px",
      py: 2,
      fontSize: "12px",
    },
    sm: {
      height: "40px",
    },
    md: {
      fontSize: "14px",
      height: "48px",
    },
  },
  variants: {
    solid: {
      color: "#333333",
      backgroundColor: "#F1F6F7",
    },
    outline: {
      background: "transparent",
    },
    "outline-blue": {
      background: "#EDFAFF",
      border: "1px solid",
      borderColor: "#f8ce16",
      color: "#333333",
    },
    "outline-clean": {
      background: "transparent",
      border: "1px solid",
      borderColor: "#e80979",
      color: "#e80979",
    },
  },
  defaultProps: {
    size: "md",
    variant: "",
  },
};

export default Button;
