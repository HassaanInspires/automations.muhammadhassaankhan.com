import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'User Data Deletion — AutoPost',
  description: 'User Data Deletion and Access Revocation Instructions for AutoPost.',
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="User Data Deletion Instructions"
      lastUpdated="November 9, 2026"
      badge="Meta Compliance & Revocation"
    >
      <h1>User Data Deletion Instructions</h1>
      <p>Last updated: November 9, 2026</p>
      
      <p>
        <strong>AutoPost</strong> operates on an ephemeral, zero-storage architecture. The application does not collect,
        store, or process personal data from external Facebook users or visitors.
      </p>

      <h2>1. Confirmation of Zero Stored Data</h2>
      <p>
        Because AutoPost operates strictly as an autonomous personal publisher for Muhammad Hassaan Khan&apos;s Facebook Page,
        no user profiles, personal details, contact lists, or cookie identifiers are recorded in any persistent database.
        As a result, there are no external user records retained on our servers.
      </p>

      <h2>2. How to Revoke Facebook Permissions</h2>
      <p>
        If you have previously granted application permissions or wish to verify that AutoPost has no connection to your Facebook profile,
        you can remove the application directly through your Facebook account settings at any time:
      </p>
      <ol>
        <li>Log in to your Facebook account and navigate to <strong>Settings &amp; Privacy &gt; Settings</strong>.</li>
        <li>In the left sidebar, click on <strong>Apps and Websites</strong>.</li>
        <li>Locate <strong>AutoPost</strong> in the list of authorized applications.</li>
        <li>Click <strong>Remove</strong> to instantly revoke all permissions and tokens.</li>
      </ol>

      <h2>3. Direct Developer Contact for Deletion Requests</h2>
      <p>
        If you have any questions or wish to confirm the status of your data, you may submit a formal request directly to the developer:
      </p>
      <p>
        <strong>Developer:</strong> Muhammad Hassaan Khan<br />
        <strong>Email:</strong>{' '}
        <a href="mailto:m.hassaankhan.official@gmail.com">
          m.hassaankhan.official@gmail.com
        </a><br />
        <strong>Subject Line:</strong> <code>Data Deletion Request - AutoPost</code>
      </p>
      <p>
        All manual inquiries are reviewed and confirmed within 48 business hours.
      </p>
    </LegalLayout>
  );
}
