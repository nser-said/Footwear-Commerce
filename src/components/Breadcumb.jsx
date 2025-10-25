"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-background-light dark:border-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
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
            <nav className="hidden md:flex items-center gap-6">
              <a className="nav-link" href="#">
                New Arrivals
              </a>
              <a className="nav-link" href="#">
                Men
              </a>
              <a className="nav-link" href="#">
                Women
              </a>
              <a className="nav-link" href="#">
                Kids
              </a>
              <a className="nav-link" href="#">
                Sports
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-white dark:bg-black/20 rounded-lg shadow-sm">
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <button className="cart-btn">🛒</button>
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOecmoq5Xr6PK2uKJMvkGzm2W4NrGuwvu95hokKBAB0AKydrJbO3w8bxUnhVFlxrpyrNHiYhBNder_9JFZ8zXQKhjdC2BuCdSa8dFHtuA3rtDPni77quV1-R9IDbd5fqu7vv69yUncQVkjMQGN4KKaHW3giWuEGTh1jJn6Ip5uXgsdAntafdhrlfsJmQqVaPNMApjfzKgdcUF6OW6oYRj-n9hpmVMHSrym-53LKQvUABmc0_zfF7y4pUm5f-6_g8njR10cVPvRI0i2")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
