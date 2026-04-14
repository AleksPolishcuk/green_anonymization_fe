import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

export const SectionWrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

export const ComplianceContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 68,
    paddingRight: 68,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 144,
    paddingRight: 144,
  },
}));

export const HeaderRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(12),
  marginBottom: theme.spacing(12),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
}));

export const HeaderRight = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    paddingTop: 0,
  },
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  display: "block",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  color: theme.palette.color.blue,
  marginBottom: theme.spacing(4),
}));

export const CardsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignItems: "start",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(6),

  [theme.breakpoints.up("lg")]: {
    "& > *:nth-child(2)": {
      marginTop: theme.spacing(10),
    },

    "& > *:nth-child(4)": {
      marginTop: theme.spacing(10),
    },
  },

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "unset",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  border: `1px solid ${theme.palette.background.softGray}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),

  opacity: 0,
  transform: "translateY(20px)",

  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",

    "&:hover": {
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      transform: "translateY(-4px)",
      transition: "box-shadow 0.2s ease, transform 0.2s ease !important",
      transitionDelay: "0s !important",
    },
  },
}));

export const CardAccentLine = styled("span")<{ $color: string }>(
  ({ $color }) => ({
    width: "40px",
    height: "4px",
    backgroundColor: $color,
    borderRadius: "2px",
  }),
);

export const CardBadge = styled("span")<{ $color: string }>(
  ({ theme, $color }) => ({
    padding: "3px 10px",
    borderRadius: "20px",
    backgroundColor: `${$color}12`,
    color: $color,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    fontWeight: theme.typography.fontWeightBold,
    width: "fit-content",
  }),
);

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightSemiBold,
  color: theme.palette.color.charcoal,
}));

export const CardEntityCount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.color.grayDark,
}));

export const HeaderDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.grayDark,
}));
