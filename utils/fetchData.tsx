export async function fetchData(query: string) {
  try {
    const hygraphUrl = process.env.NEXT_HYGRAPH_URL;
    if (!hygraphUrl) {
      throw new Error("NEXT_HYGRAPH_URL is not set");
    }

    const response = await fetch(hygraphUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
      }),
    });

    const { data } = await response.json();
    return data;
  } catch {
    return null;
  }
}
