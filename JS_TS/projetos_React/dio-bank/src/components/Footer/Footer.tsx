import {
  Box,
  Text
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <Box className={styles.footer}>
        <div className={styles.divisor}></div>
          <Text fontSize="md" padding={2}>
            Built by Lucas D
          </Text>
      </Box>
    </footer>
  );
};