import { styled } from "@mui/material/styles";

export const PaginationBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  borderTop: `1px solid ${theme.palette.background.softGray}`,
  overflowX: "auto",
}));
