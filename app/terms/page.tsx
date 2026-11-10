import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { ShieldCheck, CheckCircle2, FileText, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — AutoPost',
  description: 'Official Terms of Service for AutoPost, an autonomous personal Facebook publishing engine operated by Muhammad Hassaan Khan.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="November 10, 2026"
      badge="Private Operator Terms"
    >
      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        {/* Preamble Callout */}
        <div className="rounded-2xl border border-black/[0.06] bg-black/[0.015] p-6 text-slate-800">
          <p className="text-base font-serif italic text-slate-900 leading-snug">
            &ldquo;These Terms define the administrative boundaries and governance of the AutoPost automation engine.&rdquo;
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            These Terms of Service govern the deployment, operational boundaries, and compliance framework of <strong>AutoPost</strong>, developed and operated solely by <strong>Muhammad Hassaan Khan</strong>.
          </p>
        </div>

        {/* Section 01 */}
        <section className="space-y-3">
          <h2 id="purpose" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">01.</span> Purpose &amp; Operational Scope
          </h2>
          <p>
            AutoPost is an autonomous personal engineering utility designed exclusively to generate, structure, and publish scheduled technical briefings to Muhammad Hassaan Khan&apos;s personal Facebook Page via official Meta Graph API v20.0 endpoints.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>AutoPost is strictly a single-user private application.</li>
            <li>No public user registrations, subscriptions, commercial payments, or consumer accounts are provided.</li>
            <li>External Facebook visitors and followers cannot access administrative controls or execute actions through this utility.</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="space-y-3">
          <h2 id="meta-compliance" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">02.</span> Meta Platform Terms &amp; Developer Policies
          </h2>
          <p>
            AutoPost operates in strict compliance with Meta&apos;s Platform Terms and Developer Policies:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              All API requests are authenticated using Page Access Tokens bound exclusively to Muhammad Hassaan Khan&apos;s verified Facebook Page.
            </li>
            <li>
              Requested permissions (<code>pages_manage_posts</code> and <code>pages_read_engagement</code>) are strictly confined to their declared publishing and delivery verification purposes.
            </li>
            <li>
              All communication takes place over encrypted HTTPS TLS 1.3 channels adhering to Meta&apos;s rate limits and automated error handling specifications.
            </li>
          </ul>
        </section>

        {/* Section 03 */}
        <section className="space-y-3">
          <h2 id="intellectual-property" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">03.</span> Intellectual Property &amp; Content Ownership
          </h2>
          <p>
            All technical editorial briefings, architectural summaries, and published texts synthesized by the application belong exclusively to <strong>Muhammad Hassaan Khan</strong>. AutoPost does not claim ownership of Meta trademarks or third-party intellectual property referenced within technical briefings.
          </p>
        </section>

        {/* Section 04 */}
        <section className="space-y-3">
          <h2 id="ai-synthesis" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">04.</span> Automated AI Content Synthesis
          </h2>
          <p>
            Content generated through the DeepSeek API uses strict temperature clamping (0.70) to ensure high signal-to-noise ratio, technical accuracy, and consistent editorial standards. All scheduled dispatches are subject to automated format moderation prior to transmission.
          </p>
        </section>

        {/* Section 05 */}
        <section className="space-y-3">
          <h2 id="liability" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">05.</span> Limitation of Liability &amp; Warranty
          </h2>
          <p>
            AutoPost is provided on an &quot;as is&quot; and &quot;as available&quot; basis for personal administrative use. As a private tool, no commercial warranties, express or implied, are extended to external parties. The developer is not liable for intermittent Meta API downtime or third-party infrastructure outages.
          </p>
        </section>

        {/* Section 06 */}
        <section className="space-y-3 border-t border-black/[0.08] pt-6">
          <h2 id="contact" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">06.</span> Contact &amp; Governance
          </h2>
          <p className="text-muted-foreground">
            For legal inquiries, terms clarification, or platform review correspondence:
          </p>
          <div className="rounded-2xl border border-black/[0.06] bg-black/[0.015] p-5 text-xs space-y-1.5">
            <p><strong>Developer:</strong> Muhammad Hassaan Khan</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:m.hassaankhan.official@gmail.com" className="text-[#1848ff] font-semibold underline">
                m.hassaankhan.official@gmail.com
              </a>
            </p>
            <p><strong>Governance:</strong> AutoPost Personal Automation Engine</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
