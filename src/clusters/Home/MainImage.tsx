import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function MainImage() {
  return (
    <Flex w="60%">
      <Image
        src="/images/undraw_Work_time_re_hdyv.svg"
        alt="office"
        width="550px"
        height="400px"
      />
    </Flex>
  );
}
