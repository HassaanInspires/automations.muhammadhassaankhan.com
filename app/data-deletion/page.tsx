import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { ShieldCheck, CheckCircle2, Trash2, ArrowRight, ExternalLink, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'User Data Deletion Instructions — AutoPost',
  description: 'Official User Data Deletion Instructions and Access Revocation Protocol for AutoPost under Meta Platform Terms.',
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="User Data Deletion Instructions"
      lastUpdated="November 10, 2026"
      badge="Meta Revocation Protocol"
    >
      <div className="space-y-8 text-sm leading-relaxed text-slate-700">
        {/* Preamble Callout */}
        <div className="rounded-2xl border border-black/[0.06] bg-black/[0.015] p-6 text-slate-800">
          <p className="text-base font-serif italic text-slate-900 leading-snug">
            &ldquo;Zero data stored means zero data at risk. Full self-serve access revocation is guaranteed.&rdquo;
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            In accordance with Meta Developer Policies and Platform Terms, this document provides complete instructions on how Facebook users can revoke application permissions and request verification of data deletion from <strong>AutoPost</strong>.
          </p>
        </div>

        {/* Section 01 */}
        <section className="space-y-3">
          <h2 id="confirmation" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">01.</span> Confirmation of Zero Persistent User Data
          </h2>
          <p>
            AutoPost operates on a strictly ephemeral, volatile execution architecture:
          </p>
          <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs">
              <CheckCircle2 className="size-4 text-emerald-600" />
              <span>No External User Databases</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AutoPost does not operate any external database, persistent storage table, or tracking cache containing personal user information, profile IDs, email addresses, or browsing activities. All publishing operations execute in temporary volatile RAM and terminate immediately upon Meta Graph API delivery confirmation.
            </p>
          </div>
        </section>

        {/* Section 02: Numbered Tactile Step-by-Step Card */}
        <section className="space-y-4">
          <h2 id="facebook-revocation" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">02.</span> How to Revoke Facebook Permissions (Step-by-Step)
          </h2>
          <p className="text-muted-foreground">
            You can verify and remove AutoPost from your Facebook account at any time using Meta&apos;s self-serve privacy controls:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Step 1 */}
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#1848ff]">01</span>
                <h3 className="mt-2 text-sm font-bold text-slate-950">Navigate to Settings</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-normal">
                  Log in to Facebook and open <strong>Settings &amp; Privacy &gt; Settings</strong> from your account profile menu.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#1848ff]">02</span>
                <h3 className="mt-2 text-sm font-bold text-slate-950">Open Apps and Websites</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-normal">
                  In the left sidebar, select <strong>Apps and Websites</strong> to view all authorized platform connections.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-[#1848ff]">03</span>
                <h3 className="mt-2 text-sm font-bold text-slate-950">Locate AutoPost</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-normal">
                  Find <strong>AutoPost</strong> in the list of active applications and click <strong>View and edit</strong>.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-normal text-emerald-600">04</span>
                <h3 className="mt-2 text-sm font-bold text-slate-950">Confirm Removal</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-normal">
                  Click <strong>Remove</strong> to permanently revoke all access tokens. Meta immediately severs the connection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 */}
        <section className="space-y-3">
          <h2 id="manual-requests" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">03.</span> Formal Deletion Verification Request
          </h2>
          <p>
            If you wish to receive formal written confirmation that zero data associated with your identity is stored on AutoPost systems, you may submit a request directly to the developer:
          </p>
          <div className="rounded-2xl border border-black/[0.06] bg-black/[0.015] p-5 text-xs space-y-2">
            <p><strong>Recipient:</strong> Muhammad Hassaan Khan</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:m.hassaankhan.official@gmail.com" className="text-[#1848ff] font-semibold underline">
                m.hassaankhan.official@gmail.com
              </a>
            </p>
            <p><strong>Subject Line:</strong> <code>Data Deletion Request - AutoPost</code></p>
            <p className="flex items-center gap-1.5 text-muted-foreground pt-1">
              <Clock className="size-3.5 text-slate-700" />
              <span>All formal requests are verified and answered in writing within 48 business hours.</span>
            </p>
          </div>
        </section>

        {/* Section 04 */}
        <section className="space-y-3 border-t border-black/[0.08] pt-6">
          <h2 id="callback" className="text-xl font-bold tracking-tight text-slate-950 flex items-center gap-2">
            <span className="text-[#1848ff]">04.</span> Data Deletion Callback URL Notice
          </h2>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Because AutoPost does not retain user databases, user accounts, or profile sessions, Meta&apos;s automated Data Deletion Callback endpoint immediately confirms that zero bytes of user data exist to delete. For any further compliance inquiries, refer to our{' '}
            <a href="/privacy" className="text-[#1848ff] font-semibold underline">Privacy Policy</a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
