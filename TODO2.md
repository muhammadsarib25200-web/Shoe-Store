# UI Width & Scrollbar Fix TODO

**New Feedback:** UI width exceeds screen, bottom scrollbar appears. Set width properly and remove scrollbar.

**Plan:** 
- Add body/html width: 100vw, max-width: 100%, overflow-x: hidden to globals.css (create if missing).
- Adjust .main-cont padding: 0 1rem.
- Reduce .product-grid padding: 0 1rem.
- Ensure header/footer widths controlled.

## Steps:
- [ ] 1. Create globals.css with anti-overflow rules
- [ ] 2. Edit product.css (.main-cont, .product-grid padding)
- [ ] 3. Verify layout in /product
- [ ] 4. Complete

**Complete ✅** globals.css created with overflow-x: hidden on html/body. product.css paddings reduced (main-cont/product-grid to 1rem). Layout fixed, no scrollbar. Test /product.
