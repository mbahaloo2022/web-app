'use client';

import { FormEvent, useState } from 'react';
import { getResume, login, ResumeData } from '@/lib/api';
import { ResumeView } from '@/components/ResumeView';

export default function HomePage() {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('parvaneh@1234*mohsen');
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const auth = await login(username, password);
      const data = await getResume(auth.accessToken);
      setResume(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <div className="backdrop" />
      <section className="panel card">
        <h1>Psychologist CV & Resume Portal</h1>
        <p>
          Securely view the complete CV of Dr. Parvaneh Mohsen. Use the test credentials below.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="user"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="parvaneh@1234*mohsen"
            />
          </label>

          <button disabled={loading} type="submit">
            {loading ? 'Authenticating...' : 'Open CV'}
          </button>
        </form>

        <small className="hint">
          Test user: <b>user</b> / <b>parvaneh@1234*mohsen</b>
        </small>
        {error && <p className="error">{error}</p>}
      </section>

      {resume && <ResumeView data={resume} />}
    </main>
  );
}
