export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold">RecruitCo</h3>
            <p className="mt-4 text-gray-600 text-sm max-w-xs">
              Rewriting recruitment for the modern era through revenue sharing,
              community collaboration, and AI-driven insights.
            </p>
          </div>
  
          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">PLATFORM</h4>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><a href="#revenue" className="hover:text-black">Revenue Sharing</a></li>
              <li><a href="#marketing" className="hover:text-black">Marketing Engine</a></li>
              <li><a href="#community" className="hover:text-black">Broker Community</a></li>
              <li><a href="#ai" className="hover:text-black">AI Learning</a></li>
            </ul>
          </div>
  
          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">COMPANY</h4>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              <li><a href="#about" className="hover:text-black">About</a></li>
              <li><a href="#careers" className="hover:text-black">Careers</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
              <li><a href="#support" className="hover:text-black">Support</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Row */}
        <div className="border-t border-gray-200 mt-8">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© 2025 RecruitCo. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-black">Privacy</a>
              <a href="#terms" className="hover:text-black">Terms</a>
              <a href="#cookies" className="hover:text-black">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  