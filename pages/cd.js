export default function CV() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My CV</h1>
            <a href="/" className="hover:underline">
              Home
            </a>
          </div>
        </header>
        <main className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Curriculum Vitae</h2>
          <p className="mb-6">Here is my CV. You can view it below or download it.</p>
          <div className="w-full h-[800px] mb-6">
            <iframe
              src="/my_cv.pdf"
              className="w-full h-full border-2"
              title="My CV"
            ></iframe>
          </div>
          <a
            href="/my_cv.pdf"
            download="My_CV.pdf"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download My CV
          </a>
        </main>
      </div>
    );
  }
  