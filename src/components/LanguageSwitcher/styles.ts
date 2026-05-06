import { styled } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";

export const SwitcherButton = styled(Button)(({ theme }) => ({
  minWidth: "unset",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize14,
  gap: theme.spacing(1),
}));

export const SwitcherMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(2),
    minWidth: 160,
    marginTop: theme.spacing(1),
  },
}));

export const SwitcherMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  fontSize: theme.typography.fontSize14,
}));
