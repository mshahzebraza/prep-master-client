import { QueryKey, useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query"



export const useSuspenseQueryWithErr = <
    TQueryFnData = unknown,
    TError = Error,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
>
    (suspenseQueryOptions: UseSuspenseQueryOptions<
        TQueryFnData,
        TError,
        TData,
        TQueryKey
    >) => {
    const suspenseResponse = useSuspenseQuery(suspenseQueryOptions)
    const { error, isFetching } = suspenseResponse;
    if (error && !isFetching) throw error; // since not all suspense errors are thrown automatically, we need to throw them manually

    return suspenseResponse

}