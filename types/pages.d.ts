export type PageProps<T = { [key: string]: string }> = {
    params: Promise<T>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};