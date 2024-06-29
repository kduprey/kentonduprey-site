"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";
import { useQuery } from "@/sanity/utils/useQuery";
import { homeQuery, type HomeType } from "@/sanity/data";
import { HomeLayout } from "./HomeLayout";

interface HomePagePreviewProps {
  initial: QueryResponseInitial<HomeType>;
}

const HomePagePreview = (props: Readonly<HomePagePreviewProps>) => {
  const { initial } = props;
  const { data, encodeDataAttribute } = useQuery<HomeType>(
    homeQuery,
    {},
    { initial },
  );

  return (
    <HomeLayout encodeDataAttribute={encodeDataAttribute} homeData={data} />
  );
};

export default HomePagePreview;
