import { NextResponse } from 'next/server'

export async function GET() {
  const policyText = `## Terms of Service

Last updated: October 21, 2024

Please read these Terms of Service ("Terms", "ToS") carefully before using the Resume Builder app ("the App").

### 1. Acceptance of Terms

By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not use the App.

### 2. Description of Service

The App provides a platform for users to create and customize resumes with a live preview feature and the ability to export to PDF format. All processing occurs locally on the user's device.

### 3. Use of the App

3.1. You may use the App for personal and non-commercial purposes only.

3.2. You are responsible for all content you input into the App.

3.3. You agree not to use the App for any unlawful or prohibited purpose.

### 4. Intellectual Property

4.1. The App and its original content, features, and functionality are owned by Rafal Golawski and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

4.2. You retain all rights to the content you create using the App.

### 5. No Warranty

The App is provided "as is" and "as available" without any warranties of any kind, either express or implied.

### 6. Limitation of Liability

In no event shall Rafal Golawski be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the App.

### 7. Changes to Terms

We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.

### 8. Governing Law

These Terms shall be governed and construed in accordance with the laws of Republic of Poland, without regard to its conflict of law provisions.

### 9. Contact Us

If you have any questions about these Terms, please contact us.`
  return new NextResponse(policyText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
