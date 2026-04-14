import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                {/* Logo Section */}
                <div className="first-footer">
                    
                    <a href="/" className="footer-logo">
                        <div className="custom-logo">
                            <span className="logo-footer-icon"></span>
                            <span className="logo-footer-text">👟 ShoeStore</span>
                        </div>
                    </a>

                    <p className="p-text">
                        Premium footwear for every step of your journey.
                    </p>

                    <div className="first-footer-links">
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>Twitter</span>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <a href="#">Shop</a>
                    <a href="#">Cart</a>
                    <a href="#">Wishlist</a>
                </div>

                <div className="footer-col">
                    <h3>Customer Care</h3>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Return</a>
                </div>

                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p className="footer-last-p">
                        Get the latest update on your E-mail
                    </p>

                    <input
                        className="footer-email"
                        type="email"
                        placeholder="Your email"
                    />

                    <button className="footer-btn">Subscribe</button>
                </div>

            </div>

            <div className="end-title">
                <p>© 2023 ShoeStore. All rights reserved.</p>
            </div>

        </footer>
    )
}