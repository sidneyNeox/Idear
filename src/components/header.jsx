import { Box, Image } from '@chakra-ui/react';
import Logo from '../assets/imgs/logo.png'

const Header = () => {
  return (
    <Box display="flex" alignItems="center" padding="10px" paddingTop="30px">
      <Image src={Logo} alt="Logo Idear" w={200}  mr={4} />
    </Box>
  );
}

export default Header;
