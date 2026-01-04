import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { siteContent } from '../../../data/content';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLogo,
  FooterLogoImg,
  FooterText,
  FooterTitle,
  FooterSubtitle,
  FooterAddress,
  QuickLinks,
  QuickLinkItem,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Copyright
} from './Footer.styles';

function Footer() {
  const { organization, navigation, footer } = siteContent;

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <FooterLogoImg src="/likelion_logo.png" alt="LIKELION Logo" />
            <FooterText>
              <FooterTitle>{organization.nameKr}</FooterTitle>
              <FooterSubtitle>{organization.description}</FooterSubtitle>
              <FooterAddress>{organization.address}</FooterAddress>
            </FooterText>
          </FooterLogo>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <QuickLinks>
            <QuickLinkItem>
              <NavLink to={navigation.home.path}>{navigation.home.label}</NavLink>
            </QuickLinkItem>
            <QuickLinkItem>
              <NavLink to={navigation.about.path}>{navigation.about.label}</NavLink>
            </QuickLinkItem>
            <QuickLinkItem>
              <NavLink to={navigation.projects.path}>{navigation.projects.label}</NavLink>
            </QuickLinkItem>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <SocialLinks>
            {footer.socialLinks.github && (
              <SocialLink
                href={footer.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </SocialLink>
            )}
            {footer.socialLinks.instagram && (
              <SocialLink
                href={footer.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram size={24} />
              </SocialLink>
            )}
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>{footer.copyright}</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
