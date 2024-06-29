import { draftMode } from "next/headers";
import dynamic from "next/dynamic";
import { loadHomePage } from "../sanity";
import { HomeLayout } from "./HomeLayout";

const HomePagePreview = dynamic(() => import("./preview"));

const Page = async () => {
  const homeData = await loadHomePage();

  if (draftMode().isEnabled) return <HomePagePreview initial={homeData} />;

  return <HomeLayout homeData={homeData.data} />;
};

export default Page;
