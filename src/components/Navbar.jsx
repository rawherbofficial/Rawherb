import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import products from '../data/products.json'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [showResults, setShowResults] = useState(false)
    const containerRef = useRef(null)
    const navigate = useNavigate()

    const filteredProducts = query
        ? products
            .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5)
        : []

    const handleSelect = (product) => {
        setQuery("")
        setShowResults(false)
        navigate(`/products?q=${product.name}`)
        // later → /product/${product.id}
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowResults(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            <header className="sticky top-0 z-50">

                {/* Top bar */}
                <div className="bg-dark-green text-white text-sm font-semibold text-center py-3">
                    Welcome to Rawherb
                </div>

                <nav className="bg-white relative z-50">
                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden absolute right-3 top-9 text-dark-green text-2xl"
                    >
                        ☰
                    </button>

                    <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-8 py-4">

                        {/* Logo */}
                        <Link to="/">
                            <img src="logo.webp" alt="Rawherb" className="w-20" />
                        </Link>

                        {/* 🔍 Search */}
                        <div ref={containerRef} className="relative w-45 mr-10 md:w-72">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value)
                                    setShowResults(true)
                                }}
                                onFocus={() => setShowResults(true)}
                                className="border border-dark-green rounded-full px-4 py-2 w-full text-sm"
                            />

                            {/* Dropdown */}
                            {showResults && query && (
                                <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-50">

                                    {filteredProducts.length === 0 && (
                                        <div className="px-4 py-3 text-sm text-gray-500">
                                            No products found
                                        </div>
                                    )}

                                    {filteredProducts.map(product => (
                                        <div
                                            key={product.id}
                                            onClick={() => handleSelect(product)}
                                            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-dark-green">
                                                    {product.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Rs. {product.price}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {filteredProducts.length > 0 && (
                                        <button
                                            onClick={() => navigate(`/products?q=${query}`)}
                                            className="w-full text-sm text-center py-2 text-dark-green hover:underline"
                                        >
                                            View all results
                                        </button>
                                    )}

                                </div>
                            )}
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-8 text-[15px] font-medium text-dark-green">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/products"><li>Products</li></Link>
                            <Link to="/contact"><li>Contact Us</li></Link>
                            <Link to="/about"><li>About Us</li></Link>
                            <Link to="/return-policy"><li>Return Policy</li></Link>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden absolute right-0 w-full bg-white border shadow-lg">
                            <ul className="flex flex-col gap-4 px-6 py-4 text-dark-green font-medium">
                                <Link to="/" onClick={() => setMenuOpen(false)}><li>Home</li></Link>
                                <Link to="/products" onClick={() => setMenuOpen(false)}><li>Products</li></Link>
                                <Link to="/contact" onClick={() => setMenuOpen(false)}><li>Contact Us</li></Link>
                                <Link to="/about" onClick={() => setMenuOpen(false)}><li>About Us</li></Link>
                                <Link to="/return-policy" onClick={() => setMenuOpen(false)}><li>Return Policy</li></Link>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Navbar
