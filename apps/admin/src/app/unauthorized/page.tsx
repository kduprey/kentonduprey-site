"use client";

import { useAuth } from "@clerk/nextjs";
import { Box, Center, Text, Title } from "@mantine/core";
import { useEffect } from "react";

const Page = () => {
  const { signOut } = useAuth();

  // After 5 seconds, sign out the user
  useEffect(() => {
    const timeout = setTimeout(() => {
      void signOut();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <Center h="100dvh">
      <Box>
        <Title ta="center">Unauthorized</Title>
        <Text>You are not authorized to view this page.</Text>
      </Box>
    </Center>
  );
};

export default Page;
