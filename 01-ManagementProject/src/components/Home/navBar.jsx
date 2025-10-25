

export default function NavBar() {
  const links = [
    { name: "Brain AI", href: "#brain-ai" },
    { name: "Product", href: "#product" },
    { name: "Solution", href: "#solutions" },
    { name: "Resources", href: "#resources" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Contact Sales", href: "#contact-sales" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Marca */}
        <div className="flex items-center gap-2">
          <img
            src="#"
            alt="Logo"
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold text-gray-800">Lumina</span>
        </div>

        {/* Links de navegação */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botões à direita */}
        <div className="flex items-center space-x-3">
          <a href="./login">
            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition">
              Login
            </button>
          </a>
          <a href="./signup">
            <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-black hover:bg-gray-800 transition">
              Sign Up
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
