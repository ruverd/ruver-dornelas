import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

import Search from './Search';
import { Container, Logo, ShopCart, Avatar } from './styles';

const Logo: React.FC = () => {
  const avatarSrc = `https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale`;
  const [shopCartItems, setShopCartItems] = useState(0);

  useEffect(() => {
    setShopCartItems(0);
  }, []);

  return (
    <Container>
      <Link href="/" passHref>
        <Logo>
          <Image
            src="/assets/logo.svg"
            alt="Next Day Slab"
            width="150"
            height="67"
            loading="lazy"
            layout="intrinsic"
          />
        </Logo>
      </Link>
      <Search />
      <ShopCart items={shopCartItems}>
        <FiShoppingCart />
        <span>{shopCartItems}</span>
      </ShopCart>
      <Avatar>
        <img src={avatarSrc} alt="Avatar" />
      </Avatar>
    </Container>
  );
};

export default Logo;
