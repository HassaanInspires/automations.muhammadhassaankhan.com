import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — AutoPost',
  description: 'Terms of Service for the personal Facebook automation tool.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="November 6, 2026"
      badge="Terms of Use"
    >
      <h1>Terms of Service</h1>
      <p>Last updated: November 6, 2026</p>
      <p>By using this application, you agree to these terms.</p>

      <h2>1. Description of Service</h2>
      <p>
        This application is a personal tool designed to automate the generation and posting of content to my personal Facebook Page using AI and the Meta Graph API.
      </p>

      <h2>2. Acceptable Use</h2>
      <p>
        This tool is strictly for my own personal use. It is not provided as a public service, SaaS, or commercial product for third parties.
      </p>

      <h2>3. Limitation of Liability</h2>
      <p>
        This application is provided &quot;as is&quot; without any warranties. I am not liable for any API bans, account restrictions, or issues that arise from the use of this tool.
      </p>

      <h2>4. Contact</h2>
      <p>
        For any questions regarding these Terms, please contact{' '}
        <a href="mailto:m.hassaankhan.official@gmail.com">
          m.hassaankhan.official@gmail.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
