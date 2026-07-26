import { sanityFetch } from "@/sanity/config/sanity.live";
import {
  homeQuery,
  homeSchema,
} from "@/sanity/data/queries/pageQueries/home.queries";
import { HomeLayout } from "./HomeLayout";

const Page = async () => {
  const { data } = await sanityFetch({ query: homeQuery });
  const homeData = homeSchema.parse(data);

  return <HomeLayout homeData={homeData} />;
};

export default Page;
