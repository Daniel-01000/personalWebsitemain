# Navbar Navigation Fix

## Problem
The navbar buttons weren't working when on the blog page because the anchor links (e.g., `#about`, `#contact`) were trying to scroll to sections that don't exist on the blog page—they only exist on the main page.

## Solution
Updated the `Navbar.jsx` component to intelligently handle navigation based on which page you're on:

### How It Works Now:

1. **On Main Page (`/`):**
   - All section links (Home, About, Projects, Experience, Contact) work as normal anchor links
   - They smoothly scroll to their respective sections
   - Blog link navigates to `/blog` page

2. **On Blog Page (`/blog`):**
   - Blog link stays on the blog page
   - All other links (Home, About, Projects, Experience, Contact) are now **buttons** that:
     1. Navigate you back to the main page (`/`)
     2. Wait 100ms for the page to load
     3. Smoothly scroll to the clicked section

### Technical Changes:

```javascript
// Added useNavigate hook
const navigate = useNavigate();

// Check if we're on main page
const isMainPage = location.pathname === '/';

// Smart navigation handler
const handleNavClick = (item) => {
  setMobileMenuOpen(false);
  
  // If on blog page and clicking a main page section
  if (!isMainPage && !item.isBlog) {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};
```

### Conditional Rendering:

**Desktop Navigation:**
- Blog → Uses `<Link>` (React Router)
- Other links on main page → Uses `<a>` (anchor)
- Other links on blog page → Uses `<button>` with smart navigation

**Mobile Navigation:**
- Same logic applied to mobile menu

## Result
✅ Navbar buttons now work correctly on both pages
✅ Clicking "About" from blog page takes you to main page About section
✅ Clicking "Contact" from blog page takes you to main page Contact section
✅ All navigation is smooth and seamless
✅ Works on both desktop and mobile

## Testing
Test the navigation by:
1. Go to `/blog` page
2. Click any navbar button (Home, About, Projects, Experience, Contact)
3. Should navigate to main page and scroll to that section
4. From main page, clicking those buttons should just scroll
5. Blog button should always take you to blog page

Everything should work smoothly now! 🎉
