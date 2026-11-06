import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — AutoPost',
  description: 'Privacy Policy for the personal Facebook automation tool.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="November 6, 2026"
      badge="Data Privacy Standard"
    >
      <h1>Privacy Policy</h1>
      <p>Last updated: November 6, 2026</p>
      <p>
        This Privacy Policy describes how My Automation App (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) collects, uses, and shares information when you use my personal automation tool.
      </p>

      <h2>1. Information Collection</h2>
      <p>
        This application uses the Meta Graph API to manage and publish content to my own personal Facebook Page. I do not collect, store, or share personal data from any other Facebook users, followers, or visitors.
      </p>

      <h2>2. Third-Party Services</h2>
      <p>This app uses the following third-party services:</p>
      <ul>
        <li>
          <strong>Meta Graph API:</strong> To authenticate and publish content to my Facebook Page.
        </li>
        <li>
          <strong>DeepSeek API:</strong> To generate AI text content.
        </li>
      </ul>

      <h2>3. Data Retention</h2>
      <p>
        I do not store any personal user data. Access tokens are stored securely and locally for the sole purpose of automating my own Page&apos;s posts.
      </p>

      <h2>4. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact me at{' '}
        <a href="mailto:m.hassaankhan.official@gmail.com">
          m.hassaankhan.official@gmail.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
