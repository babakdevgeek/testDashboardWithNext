import { createTheme } from "@mui/material";
import local from "next/font/local";
const IranSns = local({
  src: "../../public/fonts/IranianSans.ttf",
});
export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: IranSns.style.fontFamily,
  },
  components: {
    MuiButton: {},
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "ss",
          },
          style: {
            fontSize: 10,
            color: "deeppink",
          },
        },
      ],
    },
  },
});
