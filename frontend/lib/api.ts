export type LoginResponse = {
  accessToken: string;
  profile: {
    name: string;
    role: string;
  };
};

export type ResumeData = {
  hero: {
    name: string;
    title: string;
    location: string;
    yearsOfPractice: number;
    summary: string;
  };
  expertise: string[];
  experience: {
    role: string;
    company: string;
    period: string;
    highlights: string[];
  }[];
  education: { degree: string; school: string; year: string }[];
  certifications: string[];
  contact: { email: string; phone: string };
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000/api';

export async function login(username: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Authentication failed. Please verify credentials.');
  }

  return response.json();
}

export async function getResume(accessToken: string): Promise<ResumeData> {
  const response = await fetch(`${API_BASE}/resume`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Could not load resume profile.');
  }

  return response.json();
}
