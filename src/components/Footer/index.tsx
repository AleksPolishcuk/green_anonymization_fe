import { useMemo } from "react";

import Box from "@mui/material/Box";
import { Container, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { useFooterLegalLabels } from "components/Footer/hooks/useFooterLegalLabels";
import { SpriteIcon } from "components/SpriteIcon";
import {
  footerInternalPaths,
  footerMainLogoPreserveAspectRatio,
  footerNavGroups,
  footerSocialProfileUrls,
  spriteSymbolIds,
  spriteViewBoxes,
} from "constants/footer";
import {
  FooterBody,
  FooterBottom,
  FooterBrandBlock,
  FooterBrandRow,
  FooterDescription,
  FooterLegalRow,
  FooterRoot,
  FooterSocialRow,
  FooterTop,
  footerCopyrightSx,
  footerLegalLinkSx,
  footerMainLogoInnerSx,
  footerMainLogoWrapperSx,
  footerNavColumnStackSx,
  footerNavGridSx,
  footerNavHeadingSx,
  footerNavListSx,
  footerNavLinkSx,
  footerSocialIconSizePx,
  footerSocialIconButtonSx,
} from "components/Footer/styles";

export function Footer() {
  const { t } = useTranslation();
  const { privacyLabelKey, termsLabelKey, cookiesLabelKey } =
    useFooterLegalLabels();
  const copyrightYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <FooterRoot>
      <Container>
        <FooterBody>
          <FooterTop>
            <FooterBrandBlock>
              <FooterBrandRow>
                <Box
                  component="span"
                  role="img"
                  aria-label={t("footer.brandName")}
                  sx={footerMainLogoWrapperSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.mainLogo}
                    viewBox={spriteViewBoxes.mainLogo}
                    preserveAspectRatio={footerMainLogoPreserveAspectRatio}
                    decorative
                    sx={footerMainLogoInnerSx}
                  />
                </Box>
              </FooterBrandRow>
              <FooterDescription variant="body2">
                {t("footer.description")}
              </FooterDescription>
              <FooterSocialRow>
                <IconButton
                  component="a"
                  href={footerSocialProfileUrls.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.social.xAria")}
                  sx={footerSocialIconButtonSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.twitter}
                    viewBox={spriteViewBoxes.social}
                    width={footerSocialIconSizePx}
                    height={footerSocialIconSizePx}
                    decorative
                  />
                </IconButton>
                <IconButton
                  component="a"
                  href={footerSocialProfileUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.social.linkedinAria")}
                  sx={footerSocialIconButtonSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.linkedin}
                    viewBox={spriteViewBoxes.social}
                    width={footerSocialIconSizePx}
                    height={footerSocialIconSizePx}
                    decorative
                  />
                </IconButton>
                <IconButton
                  component="a"
                  href={footerSocialProfileUrls.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.social.githubAria")}
                  sx={footerSocialIconButtonSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.github}
                    viewBox={spriteViewBoxes.social}
                    width={footerSocialIconSizePx}
                    height={footerSocialIconSizePx}
                    decorative
                  />
                </IconButton>
              </FooterSocialRow>
            </FooterBrandBlock>

            <Stack
              component="nav"
              aria-label={t("footer.navAria")}
              sx={footerNavGridSx}
            >
              {footerNavGroups.map((group) => {
                const sectionHeadingId = `footer-nav-${group.columnTitleKey.replace(/\./g, "-")}`;
                return (
                  <Stack
                    key={group.columnTitleKey}
                    component="section"
                    aria-labelledby={sectionHeadingId}
                    sx={footerNavColumnStackSx}
                  >
                    <Typography
                      variant="h4"
                      component="h2"
                      id={sectionHeadingId}
                      sx={footerNavHeadingSx}
                    >
                      {t(group.columnTitleKey)}
                    </Typography>
                    <Box component="ul" sx={footerNavListSx}>
                      {group.links.map((item) => (
                        <Box component="li" key={item.to}>
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
                  </Stack>
                );
              })}
            </Stack>
          </FooterTop>

          <FooterBottom>
            <Typography variant="caption" component="p" sx={footerCopyrightSx}>
              {t("footer.copyright", { year: copyrightYear })}
            </Typography>
            <FooterLegalRow>
              <Link
                component={RouterLink}
                to={footerInternalPaths.privacy}
                variant="caption"
                underline="none"
                sx={footerLegalLinkSx}
              >
                {t(privacyLabelKey)}
              </Link>
              <Link
                component={RouterLink}
                to={footerInternalPaths.terms}
                underline="none"
                sx={footerLegalLinkSx}
              >
                {t(termsLabelKey)}
              </Link>
              <Link
                component={RouterLink}
                to={footerInternalPaths.cookies}
                variant="caption"
                underline="none"
                sx={footerLegalLinkSx}
              >
                {t(cookiesLabelKey)}
              </Link>
            </FooterLegalRow>
          </FooterBottom>
        </FooterBody>
      </Container>
    </FooterRoot>
  );
}

export default Footer;
