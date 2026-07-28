import { SignIn } from "@clerk/nextjs";

const Page = () => (
  <div className="flex h-dvh items-center justify-center bg-black">
    <SignIn path="/sign-in" />
  </div>
);

export default Page;
