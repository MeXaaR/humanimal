import { redirect, RedirectType } from "next/navigation";

export default function BlogPage() {
  redirect("/blog/explore", RedirectType.replace);
}
