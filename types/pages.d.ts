export type PageProps<T = { [key: string]: string }> = {
    params: T;
    searchParams: { [key: string]: string | string[] | undefined };
};