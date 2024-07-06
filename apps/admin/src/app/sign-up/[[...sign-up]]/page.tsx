import { SignUp } from "@clerk/nextjs";
import { Center, Paper } from "@mantine/core";

const Page = () => {
  return (
    <Paper bg="black" h="100vh">
      <Center h="100%">
        <SignUp path="/sign-up" />
      </Center>
    </Paper>
  );
};

export default Page;
