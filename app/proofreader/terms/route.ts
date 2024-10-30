import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    `Terms of Service for AI Proofreading Tool

Last Updated: October 30, 2024

1. Service Description
The AI Proofreading Tool ("Service") provides text proofreading capabilities using Groq AI's API.

2. User Responsibilities
- Users are responsible for the content they submit for proofreading
- Users must not submit any confidential or sensitive information
- Users must provide their own valid Groq API key

3. Service Limitations
- The service is provided "as is" without any warranties
- We do not guarantee continuous, uninterrupted access to the service
- We reserve the right to modify or discontinue the service at any time

4. Prohibited Uses
Users must not:
- Attempt to bypass any service limitations
- Use the service for illegal purposes
- Submit content that violates any third-party rights

5. Disclaimer of Warranties
The service is provided without any guarantees regarding accuracy or reliability of the proofreading results.

6. Limitation of Liability
We shall not be liable for any damages arising from the use of this service.

7. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.

8. Governing Law
These terms are governed by Republic of Poland law.

By using this service, you agree to these terms and conditions.`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
