# College Chatbot Application

A modern, responsive web application for college students and administrators featuring a chatbot interface, authentication system, and admin dashboard.

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Using Lovable (Recommended)
Visit your [Lovable Project](https://lovable.dev/projects/581e6387-6818-489b-a91e-355dbc06f13b) and start prompting for changes.

## 📁 Project Structure

### Core Application Files
```
src/
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
├── index.css            # Global styles and design system
└── vite-env.d.ts        # TypeScript environment definitions
```

### Page Components
```
src/pages/
├── Index.tsx            # Default index page (if exists)
├── Home.tsx             # Landing/home page
├── Chatbot.tsx          # Main chatbot interface
├── Login.tsx            # User login page with admin/student switch
├── Register.tsx         # User registration with role selection
├── Admin.tsx            # Admin dashboard (protected route)
└── NotFound.tsx         # 404 error page
```

### Reusable Components
```
src/components/
├── Navbar.tsx           # Main navigation with profile menu
├── ThemeToggle.tsx      # Dark/light mode switcher
├── ChatbotModal.tsx     # Chatbot modal component
└── ui/                  # shadcn/ui component library
    ├── button.tsx       # Button component with variants
    ├── card.tsx         # Card container component
    ├── dialog.tsx       # Modal/dialog component
    ├── input.tsx        # Form input component
    ├── toast.tsx        # Notification component
    └── [other ui components...]
```

### Context & State Management
```
src/contexts/
├── AuthContext.tsx      # Authentication state management
└── ThemeContext.tsx     # Theme (dark/light) state management
```

### Utilities & Hooks
```
src/
├── lib/utils.ts         # Utility functions
└── hooks/
    ├── use-mobile.tsx   # Mobile device detection
    └── use-toast.ts     # Toast notification hook
```

### Configuration Files
```
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts       # Vite bundler configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 How to Edit Different Parts

### 1. Styling & Design System
- **Global styles**: Edit `src/index.css`
- **Color scheme**: Modify CSS custom properties in `src/index.css`
- **Tailwind config**: Adjust `tailwind.config.ts`
- **Component styles**: Use Tailwind classes and design tokens

### 2. Navigation & Layout
- **Navbar**: Edit `src/components/Navbar.tsx`
- **Navigation links**: Modify the nav items in Navbar component
- **Theme switching**: Customize `src/components/ThemeToggle.tsx`

### 3. Pages & Routes
- **Add new page**: 
  1. Create file in `src/pages/`
  2. Add route in `src/App.tsx`
  3. Add navigation link in Navbar
- **Home page**: Edit `src/pages/Home.tsx`
- **Chatbot interface**: Modify `src/pages/Chatbot.tsx`
- **Authentication pages**: Update `src/pages/Login.tsx` or `src/pages/Register.tsx`

### 4. Authentication System
- **Auth logic**: Modify `src/contexts/AuthContext.tsx`
- **Login/Register forms**: Edit respective page components
- **Protected routes**: Add authentication checks in components

### 5. UI Components
- **Existing components**: Customize files in `src/components/ui/`
- **New components**: Create in `src/components/` and import where needed
- **Component variants**: Edit the `cva` configurations in component files

### 6. State Management
- **Global state**: Use React Context (see `src/contexts/`)
- **Local state**: Use React `useState` and `useEffect` hooks
- **Server state**: Utilize `@tanstack/react-query` for API calls

## 🚀 Deployment Options

### Option 1: Lovable Hosting (Easiest)
1. Open your [Lovable project](https://lovable.dev/projects/581e6387-6818-489b-a91e-355dbc06f13b)
2. Click "Share" → "Publish"
3. Your app will be live at `yourapp.lovable.app`

### Option 2: Custom Domain with Lovable
1. Go to Project → Settings → Domains
2. Click "Connect Domain"
3. Follow the DNS setup instructions
4. Requires paid Lovable plan

### Option 3: Self-Hosting
```bash
# Build for production
npm run build

# Deploy the 'dist' folder to:
# - Vercel: Connect GitHub repo
# - Netlify: Drag & drop dist folder
# - GitHub Pages: Use GitHub Actions
# - AWS S3 + CloudFront: Upload dist folder
```

## 🗄️ Backend & Database Integration

### Option 1: Supabase Integration (Recommended)

**For full backend functionality including authentication, database, and APIs:**

1. **Connect Supabase to Lovable**:
   - Click the green "Supabase" button in your Lovable interface
   - Follow the integration setup process

2. **What you get**:
   - Real user authentication (email/password)
   - PostgreSQL database with real-time subscriptions
   - File storage for images/documents
   - Edge functions for backend logic
   - Built-in security with Row Level Security (RLS)

3. **Features enabled**:
   - User registration and login
   - Data persistence
   - Role-based access control
   - API endpoints
   - Email sending capabilities

### Option 2: Custom Backend

**If you prefer building your own backend:**

1. **Backend Technologies**:
   ```bash
   # Node.js with Express
   npm create express-app@latest my-backend
   
   # Python with FastAPI
   pip install fastapi uvicorn
   
   # Next.js API routes
   npx create-next-app@latest --api
   ```

2. **Database Options**:
   - PostgreSQL (recommended)
   - MongoDB
   - MySQL
   - Firebase Firestore

3. **Authentication Solutions**:
   - Auth0
   - Firebase Auth
   - Custom JWT implementation
   - Clerk

4. **Deployment Platforms**:
   - Railway
   - Render
   - Heroku
   - AWS EC2
   - Google Cloud Run

### Option 3: Frontend-Only with External APIs

**For simpler projects:**
- Use external APIs (REST/GraphQL)
- Store user data in localStorage
- Integrate with services like Airtable, Google Sheets
- Use serverless functions (Vercel Functions, Netlify Functions)

## 🛠️ Development Tools

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- Auto Rename Tag

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lovable Documentation](https://docs.lovable.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -am 'Add feature'`
5. Push: `git push origin feature-name`
6. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
