import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { ShieldCheck, CheckCircle2, Lock, Cpu, Globe, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — AutoPost',
  description: 'Official Privacy Policy for AutoPost, an autonomous personal Facebook publishing engine operated by Muhammad Hassaan Khan.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="November 10, 2026"
      badge="Meta Platform Terms v20.0 Certified"
    >
      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        {/* Preamble Callout */}
        <div className="rounded-2xl border border-black/[0.06] bg-black/[0.015] p-6 text-slate-800">
          <p className="text-base font-serif italic text-slate-900 leading-snug">
            &ldquo;AutoPost is committed to complete architectural transparency and zero user data persistence.&rdquo;
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            This Privacy Policy governs the operation of <strong>AutoPost</strong>, developed and administered exclusively by <strong>Muhammad Hassaan Khan</strong>. AutoPost is a private automation utility engineered strictly to publish scheduled technical briefings to the developer&apos;s personal Facebook Page via official Meta Graph API v20.0 endpoints.
          </p>
        </div>

        {/* Section 01 */}
        <section className="space-y-3">
          <h2 id="scope" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">01.</span> Scope &amp; Single-Operator Exclusivity
          </h2>
          <p>
            AutoPost is maintained strictly as an autonomous personal publisher. It is not a commercial SaaS, public portal, or consumer-facing service.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>No public user registration, member accounts, or external logins exist.</li>
            <li>No external Facebook users or page followers can submit personal information to this platform.</li>
            <li>All publishing operations execute automatically under the direct administrative credentials of Muhammad Hassaan Khan.</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="space-y-3">
          <h2 id="zero-storage" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">02.</span> Information Collection &amp; Zero-Storage Architecture
          </h2>
          <p>
            AutoPost operates on a strict zero-storage architecture designed to eliminate data retention by default:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5 text-xs">
                <Lock className="size-4 text-emerald-600" />
                Zero Visitor Tracking
              </span>
              <p className="mt-2 text-xs text-muted-foreground leading-normal">
                We do not track, profile, store, or sell any personal data, follower identities, comments, or cookies from Facebook users.
              </p>
            </div>
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm">
              <span className="font-semibold text-slate-900 flex items-center gap-1.5 text-xs">
                <Cpu className="size-4 text-[#1848ff]" />
                Ephemeral Execution Buffer
              </span>
              <p className="mt-2 text-xs text-muted-foreground leading-normal">
                Briefing payloads exist solely in volatile runtime memory (RAM) during transmission. Once confirmed by Meta, memory is purged instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03 */}
        <section className="space-y-3">
          <h2 id="permissions" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">03.</span> Meta Graph API Permissions Requested
          </h2>
          <p>
            AutoPost requests and utilizes only the minimal permissions required to publish to the owner&apos;s personal Page:
          </p>
          <ul className="list-disc pl-5 space-y-2.5 text-muted-foreground">
            <li>
              <strong className="text-slate-900"><code>pages_manage_posts</code>:</strong> Required exclusively to transmit and publish scheduled technical updates to the owner&apos;s authorized Facebook Page feed.
            </li>
            <li>
              <strong className="text-slate-900"><code>pages_read_engagement</code>:</strong> Utilized strictly to verify HTTP delivery confirmation and feed publication status.
            </li>
          </ul>
          <p className="text-xs text-muted-foreground">
            All OAuth tokens are encrypted at rest using industry-standard AES-GCM protocols and accessed strictly by automated background tasks.
          </p>
        </section>

        {/* Section 04 */}
        <section className="space-y-3">
          <h2 id="third-party" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">04.</span> Trusted Third-Party Infrastructure
          </h2>
          <p>AutoPost communicates with only two external infrastructure providers over encrypted HTTPS TLS 1.3:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-slate-900">Meta Platforms, Inc. (Graph API v20.0):</strong> Direct, authenticated endpoints for Facebook Page content broadcasting.
            </li>
            <li>
              <strong className="text-slate-900">DeepSeek AI Engine:</strong> Secure backend API calls to synthesize structured technical briefing drafts.
            </li>
          </ul>
        </section>

        {/* Section 05 */}
        <section className="space-y-3">
          <h2 id="revocation" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">05.</span> User Data Deletion &amp; Access Revocation
          </h2>
          <p>
            Because AutoPost stores zero external user data, there are no persistent visitor records to delete. However, in full compliance with Meta Developer Policies, self-serve access revocation instructions are published on our{' '}
            <a href="/data-deletion" className="text-[#1848ff] font-semibold underline underline-offset-4">
              User Data Deletion page
            </a>.
          </p>
        </section>

        {/* Section 06 */}
        <section className="space-y-3 border-t border-black/[0.08] pt-6">
          <h2 id="contact" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">06.</span> Developer Ownership &amp; Inquiries
          </h2>
          <p className="text-muted-foreground">
            For audit inquiries, Meta review verifications, or technical documentation, please contact the developer directly:
          </p>
          <div className="rounded-2xl border border-black/[0.06] bg-black/[0.015] p-5 text-xs space-y-1.5">
            <p><strong>Operator:</strong> Muhammad Hassaan Khan</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:m.hassaankhan.official@gmail.com" className="text-[#1848ff] font-semibold underline">
                m.hassaankhan.official@gmail.com
              </a>
            </p>
            <p><strong>Application:</strong> AutoPost Personal Publishing Engine</p>
            <p><strong>Response SLA:</strong> Inquiries acknowledged within 24 business hours</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
