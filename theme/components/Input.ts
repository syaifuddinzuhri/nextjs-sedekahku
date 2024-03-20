import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      borderRadius: "none",
      borderBottomStartRadius: "0px",
      borderBottomEndRadius: "0px",
      borderTop: "0px",
      borderLeft: "0px",
      borderRight: "0px",
      borderBottom: "1px solid",
      borderColor: "#CD5A0F",
      paddingInlineStart: "0px",
      paddingInlineEnd: "0px",
      py: "12px",
      fontSize: "14px",
    },
  },
  variants: {
    filled: {
      field: {
        border: "1px solid #CD5A0F",
        px: "16px",
        borderRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderColor: "#CD5A0F",
        bg: "white",
        // bg: mode("gray.100", "whiteAlpha.50")(props),
        _hover: {
          // bg: mode("gray.200", "whiteAlpha.100")(props),
        },
        _readOnly: {
          boxShadow: "none !important",
          userSelect: "all",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
        _invalid: {
          // borderColor: getColor(theme, ec),
        },
        _focusVisible: {
          bg: "transparent",
        },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
      },
    },
  },
  defaultProps: {
    size: "",
    variant: "",
  },
};

export default Input;
