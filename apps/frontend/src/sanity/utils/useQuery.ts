import {
  type QueryParams,
  useEncodeDataAttribute,
  type UseQueryOptionsDefinedInitial,
  type WithEncodeDataAttribute,
  type QueryStoreState,
} from "@sanity/react-loader";
import { PUBLIC_CMS_URL } from "@kduprey/config";
import { queryStore } from "./createQueryStore";

/**
 * Exports to be used in client-only or components that render both server and client
 */
export const useQuery = <
  QueryResponseResult = unknown,
  QueryResponseError = unknown,
>(
  query: string,
  params?: QueryParams,
  options?: UseQueryOptionsDefinedInitial<QueryResponseResult>,
): Omit<QueryStoreState<QueryResponseResult, QueryResponseError>, "data"> & {
  data: QueryResponseResult;
} & WithEncodeDataAttribute => {
  const snapshot = queryStore.useQuery<QueryResponseResult, QueryResponseError>(
    query,
    params,
    options,
  );

  const encodeDataAttribute = useEncodeDataAttribute(
    snapshot.data,
    snapshot.sourceMap,
    PUBLIC_CMS_URL,
  );

  // Always throw errors if there are any
  if (snapshot.error) throw new Error("Snapshow Error", snapshot.error);

  return {
    ...snapshot,
    encodeDataAttribute,
  };
};

export const { useLiveMode } = queryStore;
