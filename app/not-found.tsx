import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page not found",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="px-6 py-32 text-center">
      <div className="mx-auto max-w-md">
        <div className="text-[14px] font-bold uppercase tracking-wider text-brand-500">404</div>
        <h1 className="mt-3 text-[40px] font-bold leading-tight text-ink-900 sm:text-[48px]">
          This page doesn't exist.
        </h1>
        <p className="mt-4 text-[16px] text-ink-500">
          The link might be outdated, or the page was moved. Try the homepage or pricing page.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/pricing" className="rounded-stellar-pill border-2 border-brand-500 px-6 py-3 text-[14px] font-semibold text-brand-500 hover:bg-brand-500 hover:text-white">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
