import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "info.100",
      backgroundColor: "info.100"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "info.100"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2iNFzsWhjLjWBp9FAtxOXf5D3-juquddIQ&usqp=CAU"
          }} alt="image" />
          </AspectRatio>
          <Center bg="muted.900" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "info.400",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
          Savana
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              O trio.
            </Heading>
            <Text fontSize="xs" _light={{
            color: "info.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Os reis da porr@ toda.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Na esquerda, o mais rápido, Ayrton Senna. No centro, o mais famoso, Michael Jackson. E na direita, o mais louco, Freddie Mercury.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
