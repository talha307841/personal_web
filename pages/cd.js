import Link from 'next/link';

export default function CDPage() {
  return (
    <main>
      <h1>CD Page</h1>
      <Link href="/">
        <a>Go Back to Home</a>
      </Link>
    </main>
  );
}
