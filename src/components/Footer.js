// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} hogehoge.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/tsukagoshi56" className="hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
  