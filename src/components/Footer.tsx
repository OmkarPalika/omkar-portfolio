// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-card-bg)] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Logo */}
          <div className="md:col-span-1">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[var(--color-brand-green)] rounded-full"></div>
              <span className="text-xl font-light font-script text-white">Xian</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Creating memorable digital experiences with elegant design and powerful functionality.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="#home" className="text-gray-400 hover:text-[var(--color-brand-green)] transition-colors">Home</Link>
              <Link href="#projects" className="text-gray-400 hover:text-[var(--color-brand-green)] transition-colors">Projects</Link>
              <Link href="#services" className="text-gray-400 hover:text-[var(--color-brand-green)] transition-colors">Services</Link>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors">
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors">
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors">
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-tOmkar Palika-800 mt-12 pt-8 text-center text-gray-400">
          <p>&#169; 2025 All Rights Reserved By Omkar Palika</p>
        </div>
      </div>
    </footer>
  );
}