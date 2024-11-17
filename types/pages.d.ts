export type PageProps<T = { [key: string]: string }> = {
    params: Promise<T>;
    searchParams: { [key: string]: string | string[] | undefined };
};