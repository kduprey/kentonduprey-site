import { SignIn } from "@clerk/nextjs";
import { Center, Paper } from "@mantine/core";

const Page = () => {
  return (
    <Paper bg="black" h="100vh">
      <Center h="100%">
        <SignIn path="/sign-in" />
      </Center>
    </Paper>
  );
};

export default Page;
