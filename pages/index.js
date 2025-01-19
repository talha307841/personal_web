export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Personal Website</h1>
            <nav>
              <a href="/cv" className="mr-4 hover:underline">
                CV
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
          <p>
            Hi! I’m a passionate developer. Explore my CV or get in touch with me!
          </p>
          <a
            href="/cv"
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            View My CV
          </a>
        </main>
      </div>
    );
  }
  