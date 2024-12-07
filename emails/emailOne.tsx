import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Hr,
  Link,
} from '@react-email/components';

interface PasswordResetEmailProps {
  userFirstname: string;
  resetPasswordLink: string;
  companyName: string;
  companyAddress: string;
}

export const PasswordResetEmail: React.FC<PasswordResetEmailProps> = ({
  userFirstname,
  resetPasswordLink,
  companyName,
  companyAddress,
}) => (
  <Html>
    <Head />
    <Preview>Reset your password for {companyName}</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="mx-auto my-10 max-w-2xl rounded bg-white p-8 shadow-lg">
          <Heading className="mb-4 text-2xl font-bold text-gray-800">
            Password Reset Request
          </Heading>
          <Text className="mb-4 text-gray-700">
            Hi {userFirstname},
          </Text>
          <Text className="mb-4 text-gray-700">
            We received a request to reset your password for your {companyName} account. If you didn't make this request, you can safely ignore this email.
          </Text>
          <Section className="mb-8 text-center">
            <Button
              className="rounded bg-blue-600 font-semibold text-white no-underline hover:bg-blue-700"
              href={resetPasswordLink}
            >
              Reset Your Password
            </Button>
          </Section>
          <Text className="mb-4 text-sm text-gray-600">
            This password reset link will expire in 1 hour. If you need to request a new one, you can do so at our login page.
          </Text>
          <Hr className="my-6 border-gray-300" />
          <Text className="mb-4 text-sm text-gray-600">
            If you're having trouble clicking the password reset button, copy and paste the URL below into your web browser:
          </Text>
          <Link
            href={resetPasswordLink}
            className="mb-8 block break-all text-sm text-blue-600"
          >
            {resetPasswordLink}
          </Link>
          <Text className="mb-4 text-xs text-gray-500">
            For security reasons, please do not forward this email to anyone. If you have any concerns, please contact our support team.
          </Text>
          <Hr className="my-6 border-gray-300" />
          <Text className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            <br />
            {companyAddress}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default PasswordResetEmail;

