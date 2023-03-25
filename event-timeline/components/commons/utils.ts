import { SxProps, Theme } from "@mui/material";

export const NO_BORDER_LAST_ROW: SxProps<Theme> = {
    "& > *": { borderBottom: "unset" },
};
