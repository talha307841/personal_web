<main className="container mx-auto p-6">
  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
  <p className="text-lg mb-4">
    Feel free to reach out to me for collaborations, opportunities, or just a chat!
  </p>
  <ul className="text-lg list-disc pl-6">
    <li>
      <strong>Email:</strong> <a href="mailto:muhammadtalhayousaf3@gmail.com" className="text-blue-600 hover:underline">muhammadtalhayousaf3@gmail.com</a>
    </li>
    <li>
      <strong>Phone:</strong> <a href="tel:+923462468393" className="text-blue-600 hover:underline">+92 346 2468393</a>
    </li>
  </ul>
  <form className="bg-white p-6 rounded shadow-md mt-6">
    <div className="mb-4">
      <label className="block text-gray-700">Name</label>
      <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Your Name" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <input type="email" className="w-full mt-2 p-2 border rounded" placeholder="Your Email" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Message</label>
      <textarea className="w-full mt-2 p-2 border rounded" placeholder="Your Message"></textarea>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Submit
    </button>
  </form>
</main>
