
export function HomePage() {
  return (
    <main className="bg-gray-100 text-gray-800 font-sans">
      <header className="bg-gray-900 text-white py-6 px-6 shadow">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">JTL Sheet Metal</div>
          <ul className="flex space-x-6 text-sm uppercase font-semibold tracking-wider">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Project Management</a></li>
            <li><a href="#" className="hover:text-blue-400">Case Study</a></li>
            <li><a href="#" className="hover:text-blue-400">Applications</a></li>
            <li><a href="#" className="hover:text-blue-400">Facilities</a></li>
            <li><a href="#" className="hover:text-blue-400">Why Us</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="bg-cover bg-center text-white text-center py-32 px-6" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <h1 className="text-5xl font-bold mb-4">Custom Sheet Metal Fabrication</h1>
        <p className="text-xl mb-6">Empowering your project with high-quality solutions built to last</p>
        <a href="#contact" className="bg-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-700">Get a Quote</a>
      </section>

      <section className="py-20 bg-white px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {['EV Charger Enclosures','Industrial Control Cabinets','Electronic Equipment Housings','Battery Storage Units','Mounting Brackets & Frames','Full Process Manufacturing'].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Customized solutions to empower your innovation pipeline.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input name="name" required placeholder="Your Name" className="p-3 text-gray-800 rounded" />
          <input name="email" required type="email" placeholder="Your Email" className="p-3 text-gray-800 rounded" />
          <textarea name="message" rows="4" placeholder="Tell us about your needs" className="p-3 text-gray-800 rounded"></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">Submit</button>
        </form>
      </section>

      <footer className="bg-gray-950 text-white py-6 text-center text-sm">
        © 2025 JTL Sheet Metal. Empowering your projects with precision fabrication.
      </footer>
    </main>
  );
}
