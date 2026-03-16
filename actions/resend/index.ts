// 静态导出模式占位文件 - 恢复 index.ts.bak 以启用 API 功能
interface SendEmailProps {
  email: string;
  subject: string;
  react: any;
  reactProps?: Record<string, any>;
}

export async function sendEmail(props: SendEmailProps) {
  return { success: false };
}

export async function addContactToAudience(email: string) {
  return { success: false };
}

export async function removeContactFromAudience(email: string) {
  return { success: false };
}

export async function getContactsFromAudience() {
  return { success: false, data: [] as { email: string }[] };
}
