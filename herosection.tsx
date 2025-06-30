export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-8xl mb-6">💿</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            8dmg
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Best DMG Extractor
          </p>
          <p className="text-lg mb-10 text-purple-200 max-w-2xl mx-auto">
            Bypass any MDM Restricti0ns
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#download" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors duration-200 shadow-lg"
            >
             view storage
            </a>
            <a 
              href="#features" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-8 text-sm text-purple-200">
             macOS only
          </div>
        </div>
      </div>
    </section>
  );
}
