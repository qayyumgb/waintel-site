import { redirect } from "next/navigation";
import { APP_URL, pageMetadata } from "@/lib/seo";

// Login lives on the dashboard (app.waintel.io) — this route just redirects.
// Keeping the URL alive here means /login bookmarks and old links still work,
// and search engines see we have a login page (good for branded search).
export const metadata = pageMetadata({
  title: "Log in",
  description: "Log in to your Waintel.ai dashboard.",
  path: "/login",
  noindex: true, // don't index — Google should rank the home + pricing instead
});

export default function LoginRedirect() {
  redirect(`${APP_URL}/login`);
}
