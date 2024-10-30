import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    `Privacy Policy for AI Proofreading Tool

Last Updated: October 30, 2024

1. Information Collection
We do not collect or store any personal information. The text you input for proofreading is processed in real-time and is not saved on our servers or any third-party storage.

2. Data Processing
- Your text is temporarily processed using the Groq API
- No data is retained after the proofreading process is complete
- We do not use cookies or any tracking mechanisms
- We do not collect usage statistics or analytics

3. Third-Party Services
We use Groq AI's API for text processing. Please refer to Groq's privacy policy for information about their data handling practices.

4. Contact
For any questions regarding this privacy policy, please contact us.`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
