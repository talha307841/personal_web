import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Personal Website</h2>
      <p className="text-lg">
        Hi! I’m <strong>Talha Yousaf</strong>, a Results-oriented Software Engineer with 
        <strong>3 years of experience</strong> in backend development, AI integration, 
        and building scalable applications.
      </p>
      <div className="mt-6">
        <Link href="/cv">
          <a className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">
            View My CV
          </a>
        </Link>
        <Link href="/contact">
          <a className="ml-4 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700">
            Contact Me
          </a>
        </Link>
      </div>
    </main>
  );
}
