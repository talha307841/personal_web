import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Head>
        <title>Talha Yousaf - Software Engineer</title>
      </Head>

      <header className="bg-gray-900 bg-opacity-75 p-6">
        <h1 className="text-4xl font-extrabold text-center">Talha Yousaf</h1>
        <p className="text-center text-lg mt-2">Software Engineer | AI Enthusiast | Backend Specialist</p>
      </header>

      <main className="container mx-auto p-8 text-center">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Results-oriented Software Engineer with 3 years of experience in backend development, AI integration, and building scalable applications. Proficient in Python, Django, FastAPI, and Flask, with a strong focus on creating efficient and maintainable solutions. Skilled in developing and deploying generative AI models, including GANs, for innovative projects. Passionate about solving complex problems and contributing to impactful, data-driven software solutions.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg">
            Email: <a href="mailto:muhammadtalhayousaf3@gmail.com" className="text-blue-300 underline">muhammadtalhayousaf3@gmail.com</a>
          </p>
          <p className="text-lg mt-2">
            Phone: <a href="tel:+923462468393" className="text-blue-300 underline">+92 346 2468393</a>
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-900 rounded shadow-md">Python</div>
            <div className="p-4 bg-gray-900 rounded shadow-md">Django</div>
            <div className="p-4 bg-gray-900 rounded shadow-md">FastAPI</div>
            <div className="p-4 bg-gray-900 rounded shadow-md">Flask</div>
            <div className="p-4 bg-gray-900 rounded shadow-md">AI Integration</div>
            <div className="p-4 bg-gray-900 rounded shadow-md">Generative AI</div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 bg-opacity-75 p-4 text-center mt-16">
        <p className="text-sm">&copy; 2025 Talha Yousaf. All rights reserved.</p>
      </footer>
    </div>
  );
}
