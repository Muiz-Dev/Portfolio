import Link from 'next/link';
import { Container, Flex, IconButton, Text } from '@radix-ui/themes';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { personalData } from '@/lib/portfolio-data';
import { Logo } from './ui/logo';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <Container size="4" className="px-4 py-8 md:px-6">
        <Flex direction={{ initial: 'column', md: 'row' }} align="center" justify="between" gap="4">
          <Logo size="md" />
          <Flex align="center" gap="3">
            <IconButton asChild variant="ghost" size="3" aria-label="GitHub">
              <Link href={personalData.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="small" />
              </Link>
            </IconButton>
            {personalData.facebook ? (
              <IconButton asChild variant="ghost" size="3" aria-label="Facebook">
                <Link href={personalData.facebook} target="_blank" rel="noopener noreferrer">
                  <FacebookIcon fontSize="small" />
                </Link>
              </IconButton>
            ) : null}
            <IconButton asChild variant="ghost" size="3" aria-label="LinkedIn">
              <Link href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="small" />
              </Link>
            </IconButton>
            <IconButton asChild variant="ghost" size="3" aria-label="Instagram">
              <Link href={personalData.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="small" />
              </Link>
            </IconButton>
            <IconButton asChild variant="ghost" size="3" aria-label="X">
              <Link href={personalData.x} target="_blank" rel="noopener noreferrer">
                <XIcon fontSize="small" />
              </Link>
            </IconButton>
          </Flex>
        </Flex>
        <Text asChild size="2" align="center" color="gray" className="mt-8">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
        </Text>
      </Container>
    </footer>
  );
}
