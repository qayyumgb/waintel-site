import { redirect } from "next/navigation";
import { APP_REGISTER_URL, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Start free trial",
  description: "Create your free Waintel.ai account. 7 days free, no credit card.",
  path: "/signup",
  noindex: true,
});

export default function SignupRedirect() {
  redirect(APP_REGISTER_URL);
}
