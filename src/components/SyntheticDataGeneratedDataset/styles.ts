import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { deidColors, deidDarkColors } from "constants/DeidPage";

export const SyntheticDataGeneratedDatasetSectionRoot = styled(Box)(
  ({ theme }) => ({
    position: "relative",
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(7),
  }),
);

export const SpriteIconSvg = styled("svg")({
  width: 15,
  height: 15,
  display: "block",
  flexShrink: 0,
});

export const TableCard = styled("div")(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.background.softGray}`,
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: colors.topLine,
    },
  };
});

export const TableHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 90,
  padding: theme.spacing(0, 6),
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  cursor: "pointer",
}));

export const TableHeaderLeft = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const TableIconWrapper = styled("div")(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.accent.lightLilac ?? `${theme.palette.accent.lilac}14`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const TableTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightRegular,
}));

export const DataSafetyInfoWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 4),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const TableStats = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,
  display: "inline-flex",
}));

export const StyledTable = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
}));

export const Th = styled("th")(({ theme }) => ({
  textAlign: "left",
  height: 40,
  padding: theme.spacing(0, 4),
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  backgroundColor: `${theme.palette.background.softGray}CC`,
}));

export const Td = styled("td")(({ theme }) => ({
  height: 50,
  padding: theme.spacing(0, 4),
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  color: theme.palette.color.charcoal,
  verticalAlign: "middle",
}));

export const TdBold = styled(Td)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

export const Tr = styled("tr")(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: `${theme.palette.background.softGray}CC`,
  },
  "&:last-child td": {
    borderBottom: "none",
  },
}));

export const TableScrollWrapper = styled("div")({
  overflowX: "auto",
});

export const ActionsBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(4, 6),
  borderTop: `1px solid ${theme.palette.background.softGray}`,
}));

export const ActionButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 4),
  borderRadius: theme.spacing(2.5),
  border: `1px solid ${theme.palette.background.softGray}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.color.charcoal,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.background.softGray,
  },
}));

export const IconWrapper = styled("svg")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "currentColor",
});

export const DataSafetyInfoIconWrapper = styled(IconWrapper)(({ theme }) => ({
  width: 11,
  height: 11,
  marginRight: theme.spacing(0.5),
  display: "inline-flex",
  flexShrink: 0,
  color: theme.palette.color.blue,
}));
