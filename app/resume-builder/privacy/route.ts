import { NextResponse } from 'next/server'

export async function GET() {
  const policyText = `## Privacy Policy

Last updated: October 21, 2024

Thank you for using our Resume Builder app. We are committed to protecting your privacy and want to be transparent about our practices.

### Data Collection and Usage

Our Resume Builder app does not collect, store, or transmit any personal information. All data you enter for your resume is processed locally on your device and is not sent to or stored on our servers.

### Live Preview and Export

The live preview feature and PDF export functionality operate entirely within your browser or device. No data is transmitted to external servers during these processes.

### Third-Party Services

We do not use any third-party services that collect data on our behalf.

### Changes to This Policy

We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.

### Contact Us

If you have any questions about this Privacy Policy, please contact us.`
  return new NextResponse(policyText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
