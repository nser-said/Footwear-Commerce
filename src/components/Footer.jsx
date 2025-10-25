export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black/20 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 text-black dark:text-white">
              <svg
                className="h-6 w-6 text-primary"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
              <h1 className="text-xl font-bold">Footwear</h1>
            </a>
            <p className="text-sm text-black/60 dark:text-white/60 mt-4">
              Your destination for premium quality shoes and sneakers.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/" className="footer-link">New Arrivals</a></li>
              <li><a href="#" className="footer-link">Men</a></li>
              <li><a href="#" className="footer-link">Women</a></li>
              <li><a href="#" className="footer-link">Kids</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
