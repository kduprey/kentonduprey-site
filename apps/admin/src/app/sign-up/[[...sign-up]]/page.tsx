import { SignUp } from "@clerk/nextjs";

const Page = () => (
  <div className="flex h-dvh items-center justify-center bg-black">
    <SignUp path="/sign-up" />
  </div>
);

export default Page;
