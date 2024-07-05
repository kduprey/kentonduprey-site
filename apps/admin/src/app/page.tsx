import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = () => {
  const { userId } = auth();

  if (userId) redirect("/dashboard");

  redirect("/sign-in");
};

export default HomePage;
