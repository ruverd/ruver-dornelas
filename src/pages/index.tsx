import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  Profile,
  NavContainer,
  Logo,
  LinkDownload,
  HighlightContainer,
} from '@/styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <NavContainer>
      <Link href="/" passHref>
        <Logo>
          <Image
            src="/assets/logo.svg"
            alt="Ruver Dornelas"
            width="79"
            height="133"
            loading="lazy"
            layout="intrinsic"
          />
        </Logo>
      </Link>
      <hr />
      <LinkDownload href="#">Download My CV</LinkDownload>
      <ul>
        <li>
          <a>
            <Image
              src="/assets/linkedin.svg"
              alt="Linkedin"
              width="24"
              height="24"
              loading="lazy"
              layout="intrinsic"
            />
          </a>
        </li>
        <li>
          <a>
            <Image
              src="/assets/github.svg"
              alt="Github"
              width="24"
              height="24"
              loading="lazy"
              layout="intrinsic"
            />
          </a>
        </li>
        <li>
          <a>
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width="24"
              height="24"
              loading="lazy"
              layout="intrinsic"
            />
          </a>
        </li>
      </ul>
    </NavContainer>
    <HighlightContainer>
      <h1>
        I am
        <br />
        Ruver Dornelas
      </h1>
      <h3>
        I design and develop
        <br />
        applications for humans
      </h3>
    </HighlightContainer>
    <Profile>
      <Image
        src="/assets/ellipsesProfile.svg"
        alt="Ruver Dornelas"
        loading="lazy"
        layout="fill"
      />
    </Profile>
  </Container>
);

export default Home;
