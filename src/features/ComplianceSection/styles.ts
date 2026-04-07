import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import { CARD_BORDER_COLOR } from "constants";

export const SectionWrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(20, 0),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(10, 0),
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
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(4),
}));

export const CardsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignItems: "start",
  gap: theme.spacing(6),
  marginBottom: theme.spacing(6),

  "& > *:nth-child(2)": {
    marginTop: theme.spacing(10),
  },

  "& > *:nth-child(4)": {
    marginTop: theme.spacing(10),
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    alignItems: "unset",
    gap: theme.spacing(4),

    "& > *:nth-child(n)": {
      marginTop: 0,
    },
  },
}));

export const CardWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  border: `1px solid ${CARD_BORDER_COLOR}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  transition: "box-shadow 0.2s ease, transform 0.2s ease",

  "&:hover": {
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-4px)",
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
  color: theme.palette.text.primary,
}));

export const CardEntityCount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
}));

export const HeaderDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const CustomBanner = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
  padding: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.main,

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5),
    gap: theme.spacing(4),
    alignItems: "flex-start",
  },
}));

export const BannerIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: theme.spacing(12),
  height: theme.spacing(12),
  borderRadius: "12px",
  backgroundColor: theme.palette.primary.main,
}));

export const BannerTextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
