export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Contact Me</h1>
            <a href="/" className="hover:underline">
              Home
            </a>
          </div>
        </header>
        <main className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="bg-white p-6 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded"
                placeholder="Talha Yousaf"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border rounded"
                placeholder="muhammadtalhayousaf3@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full mt-2 p-2 border rounded"
                placeholder="
Results-oriented Software Engineer with 3 years of experience in backend development, Al integration, and building scalable applications. Proficient in Python, Django, FastAPI, and Flask, with a strong focus on creating efficient and maintainable solutions. Skilled in developing and deploying generative Al models, including GANs, for innovative projects. Passionate about solving complex problems and contributing to impactful, data-driven software solutions."
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
  