import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'User Data Deletion — AutoPost',
  description: 'User Data Deletion instructions for the personal Facebook automation tool.',
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="User Data Deletion"
      lastUpdated="November 6, 2026"
      badge="Compliance & Revocation"
    >
      <h1>User Data Deletion</h1>
      <p>Last updated: November 6, 2026</p>
      <p>This application does not collect or store personal data from external users.</p>
      <p>
        However, if you have interacted with my Facebook Page and wish to have any data removed, or
        if you are a user of this tool and wish to revoke access, you can do so easily:
      </p>

      <h2>1. Revocation via Facebook Settings</h2>
      <ol>
        <li>Go to your Facebook Settings &amp; Privacy &gt; Settings.</li>
        <li>Click on &quot;Apps and Websites&quot;.</li>
        <li>Find this app and click &quot;Remove&quot;.</li>
      </ol>

      <h2>2. Direct Deletion Request</h2>
      <p>
        Alternatively, you can email me at{' '}
        <a href="mailto:m.hassaankhan.official@gmail.com">
          m.hassaankhan.official@gmail.com
        </a>{' '}
        to request the deletion of any data.
      </p>
    </LegalLayout>
  );
}
