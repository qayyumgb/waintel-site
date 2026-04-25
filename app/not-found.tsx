import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page not found",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="container py-32 text-center">
      <div className="text-[14px] font-bold uppercase tracking-wider text-brand-500">404</div>
      <h1 className="mt-3 text-display-lg">This page doesn't exist.</h1>
      <p className="mx-auto mt-4 max-w-md text-[16px] text-ink-500">
        The link might be outdated, or the page was moved. Try the homepage or pricing page.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/pricing" className="btn-secondary">See pricing</Link>
      </div>
    </section>
  );
}
