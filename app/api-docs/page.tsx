import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { APP_URL, pageMetadata } from "@/lib/seo";
import { PlugIcon } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "API & Webhooks",
  description:
    "Complete reference for the Waintel REST API and webhook system. Authentication, endpoints, events, rate limits, and real-world integration patterns.",
  path: "/api-docs",
});

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

/* Read the source MD at build time — single source of truth lives in waintel/docs/ */
function loadDoc(): string {
  /* The waintel-site folder sits next to the waintel folder, so resolve up + over */
  const candidates = [
    path.resolve(process.cwd(), "../waintel/docs/api-and-webhooks.md"),
    path.resolve(process.cwd(), "../../waintel/docs/api-and-webhooks.md"),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf8");
  }
  return [
    "# API & Webhooks",
    "",
    "_Source documentation file not found at build time._",
    "",
    "If you're seeing this in production, the markdown file at `waintel/docs/api-and-webhooks.md` was not bundled.",
  ].join("\n");
}

interface TocEntry { depth: number; text: string; slug: string }

/* Slug logic mirrors rehype-slug's defaults so anchors match */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractToc(md: string): TocEntry[] {
  const lines = md.split("\n");
  const toc: TocEntry[] = [];
  let inFence = false;
  for (const line of lines) {
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+)$/.exec(line);
    if (m) {
      const depth = m[1].length;
      const text = m[2].replace(/[`*_]/g, "").trim();
      toc.push({ depth, text, slug: slugify(text) });
    }
  }
  return toc;
}

export default function ApiDocsPage() {
  const md = loadDoc();
  const toc = extractToc(md);

  return (
    <div>
      {/* HERO */}
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-14 sm:py-20">
          <div className="max-w-[820px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-stellar-pill bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
              <PlugIcon size={14} />
              <span>Developer reference</span>
            </div>
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Waintel API <span className="text-brand-highlight">& Webhooks</span>
            </h1>
            <p className="mb-6 max-w-[680px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              Plug Waintel into your stack in an afternoon. Full REST API for messages,
              contacts, orders, leads, and campaigns. HMAC-signed webhooks for every event.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={`${APP_URL}/developer`} target="_blank" rel="noopener noreferrer" className="btn-dark">
                Get an API key
                <ArrowRight />
              </Link>
              <Link href="/pricing" className="btn-ghost-light">
                Available on Agency tier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCS BODY */}
      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pt-12 sm:pt-16">
        <div className="mx-auto max-w-[1300px] px-6 pb-20">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sticky TOC sidebar */}
            <aside className="lg:sticky lg:top-[100px] lg:h-fit lg:w-[260px] lg:flex-shrink-0">
              <div className="rounded-stellar-md bg-white p-6">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-ink-400">
                  On this page
                </p>
                <ul className="m-0 list-none space-y-1.5 p-0">
                  {toc.map((t) => (
                    <li key={t.slug} className={t.depth === 3 ? "ml-4" : ""}>
                      <a
                        href={`#${t.slug}`}
                        className={`block rounded-md px-2 py-1.5 text-[13px] transition-colors hover:bg-brand-50 hover:text-brand-700 ${
                          t.depth === 2 ? "font-semibold text-ink-900" : "text-ink-500"
                        }`}
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <div className="min-w-0 flex-1">
              <article className="prose-docs rounded-stellar-card bg-white p-8 sm:p-12 lg:p-16">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug]}
                >
                  {md}
                </ReactMarkdown>
              </article>

              {/* CTA at bottom */}
              <div className="mt-8 rounded-stellar-card bg-brand-500 p-8 text-center text-white sm:p-12">
                <h3 className="mb-3 text-[24px] font-bold sm:text-[28px]">
                  Ready to build with Waintel?
                </h3>
                <p className="mx-auto mb-6 max-w-xl text-[15px] text-white/90">
                  Get an API key from your dashboard. Webhook signing secrets are generated per endpoint.
                </p>
                <Link
                  href={`${APP_URL}/developer`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-white bg-transparent px-6 py-3 text-[14px] font-semibold text-white hover:bg-white hover:text-brand-500"
                >
                  Open developer dashboard
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
