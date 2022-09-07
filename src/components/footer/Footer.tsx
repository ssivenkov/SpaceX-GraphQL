import React from 'react';

import { FaGithub, FaLinkedinIn, FaSkype, FaTelegram } from 'react-icons/fa';

import { ContactButton } from './contactButton/ContactButton';
import { ContactsContainer, FooterContainer } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <ContactsContainer>
        <ContactButton
          icon={<FaLinkedinIn />}
          link='https://www.linkedin.com/in/ssivenkov'
        />
        <ContactButton icon={<FaTelegram />} link='https://t.me/orihiru' />
        <ContactButton icon={<FaGithub />} link='https://github.com/ssivenkov' />
        <ContactButton
          icon={<FaSkype />}
          link='https://join.skype.com/invite/cdkkYBX1uutB'
        />
      </ContactsContainer>
    </FooterContainer>
  );
};
