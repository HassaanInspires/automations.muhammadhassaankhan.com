import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — AutoPost',
  description: 'Official Privacy Policy for AutoPost, an autonomous personal Facebook publishing engine.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="November 9, 2026"
      badge="Meta Platform Terms v20.0 Standard"
    >
      <h1>Privacy Policy</h1>
      <p>Last updated: November 9, 2026</p>
      <p>
        This Privacy Policy explains how <strong>AutoPost</strong> (&quot;the Application&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;my&quot;),
        developed and operated solely by <strong>Muhammad Hassaan Khan</strong>, handles data.
        AutoPost is a private, personal utility designed strictly to manage and publish scheduled content
        to the developer&apos;s own Facebook Page via the official Meta Graph API v20.0.
      </p>

      <h2>1. Scope &amp; Private Single-User Operation</h2>
      <p>
        AutoPost is not a commercial service, SaaS product, or public multi-user application.
        No external individuals, Facebook users, followers, or page visitors can create accounts, log in,
        or submit personal information to this platform.
      </p>

      <h2>2. Information Collection &amp; Zero-Storage Architecture</h2>
      <p>
        We strictly adhere to a zero-storage data policy regarding external users:
      </p>
      <ul>
        <li>
          <strong>No Visitor Data Collected:</strong> We do not collect, track, store, or sell any personal data, profile information, friend lists, or browsing history of Facebook users or visitors.
        </li>
        <li>
          <strong>Ephemeral Execution:</strong> During scheduled automation triggers, content is synthesized and transmitted in volatile runtime memory (RAM). Once the Meta Graph API returns confirmation, execution terminates and runtime state is completely discarded.
        </li>
        <li>
          <strong>Zero External Databases:</strong> No external user database, analytics pixel, or third-party tracking cookie is operated by AutoPost.
        </li>
      </ul>

      <h2>3. Meta Graph API Permissions Used</h2>
      <p>
        AutoPost requests and utilizes only the minimal permissions necessary to manage the owner&apos;s personal Page:
      </p>
      <ul>
        <li>
          <strong><code>pages_manage_posts</code>:</strong> Required solely to programmatically create and publish scheduled text briefings to the owner&apos;s designated Facebook Page.
        </li>
        <li>
          <strong><code>pages_read_engagement</code>:</strong> Utilized strictly to verify successful post status on the owner&apos;s Page feed.
        </li>
      </ul>
      <p>
        Page access tokens are stored in secure, encrypted environment variables accessible only to the owner during automated deployment.
      </p>

      <h2>4. Third-Party Integrations</h2>
      <p>The Application interacts exclusively with the following trusted infrastructure providers:</p>
      <ul>
        <li>
          <strong>Meta Platforms, Inc. (Graph API v20.0):</strong> For secure OAuth 2.0 authorization and direct HTTPS feed publication.
        </li>
        <li>
          <strong>DeepSeek API:</strong> For automated drafting of technical editorial briefings via secured backend API requests.
        </li>
      </ul>

      <h2>5. User Data Deletion &amp; Access Revocation</h2>
      <p>
        Because AutoPost retains zero external user data, no visitor records exist to delete. However, in compliance with Meta Platform Terms, full revocation instructions can be found on our{' '}
        <a href="/data-deletion">User Data Deletion page</a>.
      </p>

      <h2>6. Contact &amp; Developer Information</h2>
      <p>
        If you have questions regarding this Privacy Policy or Meta compliance auditing, please contact the developer directly:
      </p>
      <p>
        <strong>Developer:</strong> Muhammad Hassaan Khan<br />
        <strong>Email:</strong>{' '}
        <a href="mailto:m.hassaankhan.official@gmail.com">
          m.hassaankhan.official@gmail.com
        </a><br />
        <strong>Platform:</strong> AutoPost Personal Automation Engine
      </p>
    </LegalLayout>
  );
}
