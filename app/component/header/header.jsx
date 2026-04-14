
'use client'
import './header.css'
import Link from 'next/link';
import { useStore } from '../../context/StoreContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { currentUser, cart, wishlist, logout } = useStore();
  const router = useRouter();

  return (
        <header className="navbar-header">
            
            <Link href="/" className="logo">
                <span className="logo-text">👟 ShoeStore</span>
            </Link>

            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="hamburger">☰</label>

            <nav className="header-links">
                <Link href="/">Home</Link>
                <Link href="/wishlist">Wishlist ({wishlist.length})</Link>
                <Link href="/cart">Cart ({cart.length})</Link>
                <Link href="/product">Shop</Link>
                {currentUser ? (
                  <>
                    <Link href="/profile">Profile</Link>
                    <button onClick={logout} style={{background: 'none', border: 'none', color: '#9333ea', fontWeight: '600', cursor: 'pointer'}}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Sign Up</Link>
                  </>
                )}
            </nav>
            <div className="search-header">
                <input 
                    className='search-box' 
                    type="text" 
                    placeholder="Search shoes..."
onChange={(e) => {
                      const term = e.target.value.toLowerCase().trim();
                      if (!term) return; // clear search does nothing, keeps original order
                      const container = document.querySelector('.product-grid');
                      if (!container) return;
                      const cards = Array.from(container.children);
                      const matches = [];
                      const nonMatches = [];
                      cards.forEach(card => {
                        const titleEl = card.querySelector('h2');
                        if (titleEl) {
                          const title = titleEl.textContent.toLowerCase();
                          if (title.includes(term)) {
                            matches.push(card);
                          } else {
                            nonMatches.push(card);
                          }
                        } else {
                          nonMatches.push(card);
                        }
                      });
                      // Reorder: matches first, then non-matches (all visible)
                      container.innerHTML = '';
                      matches.forEach(card => container.appendChild(card));
                      nonMatches.forEach(card => container.appendChild(card));
                    }}
                />
            </div>

        </header>
    )
}
