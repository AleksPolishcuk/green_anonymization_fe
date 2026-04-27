import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import {
  footerNavColumnTitleKey,
  footerNavLinks,
  spriteSymbolIds,
  spriteViewBoxes,
  spriteSvgPublicPath,
} from "constants/footer";
import {
  FooterBody,
  FooterBottom,
  FooterBrandBlock,
  FooterBrandRow,
  FooterDescription,
  FooterRoot,
  FooterTextBlock,
  FooterTop,
  footerCopyrightSx,
  footerLogoTextSx,
  footerMainLogoWrapperSx,
  footerNavGridSx,
  footerNavHeadingSx,
  footerNavListSx,
  footerNavLinkSx,
  FooterContainer,
} from "components/Footer/styles";

export function Footer() {
  const { t } = useTranslation();
  const copyrightYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <FooterRoot>
      <FooterContainer>
        <FooterBody>
          <FooterTop>
            <FooterBrandBlock>
              <FooterBrandRow>
                <Box
                  component="svg"
                  viewBox={spriteViewBoxes.mainLogo}
                  aria-hidden="true"
                  sx={footerMainLogoWrapperSx}
                >
                  <use
                    href={`${spriteSvgPublicPath}#${spriteSymbolIds.mainLogo}`}
                    width="36"
                    height="36"
                  />
                </Box>
                <Typography component="span" sx={footerLogoTextSx}>
                  {t("footer.brandName")}
                </Typography>
              </FooterBrandRow>
            </FooterBrandBlock>

            <FooterTextBlock>
              <FooterDescription variant="body2">
                {t("footer.description")}
              </FooterDescription>
            </FooterTextBlock>

            <Box
              component="nav"
              aria-label={t("footer.navAria")}
              sx={footerNavGridSx}
            >
              <Typography variant="h4" component="h2" sx={footerNavHeadingSx}>
                {t(footerNavColumnTitleKey)}
              </Typography>
              <Box component="ul" sx={footerNavListSx}>
                {footerNavLinks.map((item) => (
                  <Box component="li" key={item.labelKey}>
                    <Link
                      component={RouterLink}
                      to={item.to}
                      variant="body2"
                      underline="none"
                      sx={footerNavLinkSx}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </FooterTop>

          <FooterBottom>
            <Typography variant="caption" component="p" sx={footerCopyrightSx}>
              {t("footer.copyright", { year: copyrightYear })}
            </Typography>
          </FooterBottom>
        </FooterBody>
      </FooterContainer>
    </FooterRoot>
  );
}

export default Footer;
