import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — AutoPost',
  description: 'Terms of Service for AutoPost, an autonomous personal Facebook publishing engine.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="November 9, 2026"
      badge="Private Operator Terms"
    >
      <h1>Terms of Service</h1>
      <p>Last updated: November 9, 2026</p>
      <p>
        These Terms of Service govern the use of <strong>AutoPost</strong>, developed and operated solely
        by <strong>Muhammad Hassaan Khan</strong>.
      </p>

      <h2>1. Purpose of Service</h2>
      <p>
        AutoPost is an autonomous personal automation utility designed exclusively to generate and publish scheduled
        briefings to the personal Facebook Page of Muhammad Hassaan Khan using AI intelligence and the official
        Meta Graph API v20.0.
      </p>

      <h2>2. Private Operator License</h2>
      <p>
        This platform is strictly for personal, private administrative use by its developer. It does not provide public
        accounts, commercial SaaS features, subscription services, or external multi-user access.
      </p>

      <h2>3. Meta Platform Terms Compliance</h2>
      <p>
        AutoPost operates in strict accordance with Meta&apos;s Developer Policies and Platform Terms. All interactions
        with Facebook endpoints are restricted to authorized Page Access Tokens under the owner&apos;s personal administrative control.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        The software is maintained for personal use and provided &quot;as is&quot;, without warranties of any kind.
      </p>

      <h2>5. Inquiries &amp; Contact</h2>
      <p>
        For inquiries regarding these Terms, contact{' '}
        <a href="mailto:m.hassaankhan.official@gmail.com">
          m.hassaankhan.official@gmail.com
        </a>.
      </p>
    </LegalLayout>
  );
}
