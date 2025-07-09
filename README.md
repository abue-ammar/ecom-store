# EcomStore - Modern E-commerce Template

A modern, fully responsive e-commerce storefront and admin panel built with Next.js 15, TailwindCSS, and Shadcn UI components.

## Features

### Storefront Features

- 🏪 Modern product grid layout with responsive design
- 🎨 Beautiful product cards with hover effects
- 🌙 Dark/Light theme toggle
- 📱 Mobile-responsive navigation
- 🛒 Shopping cart UI (mockup)
- 🔍 Clean, aesthetic design with Tailwind spacing and shadows

### Admin Panel Features

- 🔐 Simple admin authentication mockup
- 📊 Dashboard with product statistics
- 📦 Product management (view, add products)
- 📝 Product form with validation using react-hook-form and Zod
- 🎯 Admin-only routes with auth guard
- 🗂️ Sidebar navigation for admin pages

### Technical Features

- ⚡ Next.js 15 with App Router
- 🎨 TailwindCSS for styling
- 🧩 Shadcn UI components
- 🔧 TypeScript for type safety
- 📦 Bun package manager
- 🌙 Theme switching with next-themes
- 📱 Fully responsive design

## Project Structure

```
src/
├── app/
│   ├── (admin)/admin/          # Admin layout group
│   │   ├── layout.tsx          # Admin sidebar layout
│   │   ├── page.tsx           # Admin dashboard
│   │   ├── products/          # Products management
│   │   └── add-product/       # Add product form
│   ├── (store)/               # Store layout group
│   │   └── layout.tsx         # Store navbar layout
│   ├── api/products/          # API routes
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # Shadcn UI components
│   ├── navbar.tsx           # Store navigation
│   ├── admin-sidebar.tsx    # Admin sidebar
│   ├── product-card.tsx     # Product display card
│   ├── auth-guard.tsx       # Admin route protection
│   └── theme-provider.tsx   # Theme context
└── lib/
    ├── auth-context.tsx     # Auth state management
    └── utils.ts            # Utility functions
```

## Getting Started

1. Install dependencies:

   ```bash
   bun install
   ```

2. Run the development server:

   ```bash
   bun run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Accessing Admin Panel

1. Click the user icon in the navbar to "login" as admin
2. Navigate to the admin panel via the "Admin Panel" button
3. Use the sidebar to navigate between admin pages

### Adding Products

1. Login as admin
2. Go to Admin Panel → Add Product
3. Fill out the product form
4. Submit to add the product to the catalog

### API Routes

- `GET /api/products` - Fetch all products
- `POST /api/products` - Add a new product

## Customization

### Theme Colors

Edit the CSS custom properties in `src/app/globals.css` to customize the color scheme.

### Product Schema

Modify the product interface in `src/app/api/products/route.ts` to add more fields.

### Styling

The project uses TailwindCSS with custom utility classes for consistent spacing and aesthetics.

## Deployment

Build the project:

```bash
bun run build
```

Start the production server:

```bash
bun run start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **UI Components**: Shadcn UI
- **Forms**: React Hook Form + Zod validation
- **Theme**: next-themes
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Language**: TypeScript

## License

MIT License - feel free to use this template for your projects!
