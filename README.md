# Ahmed Attafi - Portfolio Website

A powerful, modern portfolio website built with Next.js 14, Shadcn UI, Framer Motion, Spline 3D, and Neon database. This portfolio showcases my work as a Software Developer and IoT Specialist.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark/light mode support
- **3D Animations**: Interactive Spline 3D elements for engaging user experience
- **Smooth Animations**: Framer Motion for fluid transitions and interactions
- **Dynamic Content**: Neon PostgreSQL database for dynamic project and blog management
- **Contact Form**: Functional contact form with database storage
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for speed and accessibility
- **Type-Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn UI
- **Animations**: Framer Motion
- **3D Graphics**: Spline
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

### Backend & Database
- **Database**: Neon PostgreSQL
- **ORM**: Native SQL with Neon serverless driver
- **API**: Next.js API Routes

### Development
- **Language**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Project Structure

```
ahmed-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   ├── ui/               # Shadcn UI components
│   │   ├── navigation.tsx     # Navigation component
│   │   ├── footer.tsx         # Footer component
│   │   └── theme-provider.tsx # Theme provider
│   └── lib/
│       └── utils.ts           # Utility functions
├── database/
│   └── schema.sql             # Database schema
├── public/                    # Static assets
├── .env.local                 # Environment variables
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon database account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Attafii/ahmed-portfolio.git
   cd ahmed-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.local` and update with your values:
   ```env
   # Neon Database
   DATABASE_URL="your_neon_database_url_here"
   
   # Email Configuration (optional)
   RESEND_API_KEY="your_resend_api_key_here"
   
   # Analytics (optional)
   NEXT_PUBLIC_GA_ID="your_google_analytics_id_here"
   ```

4. **Set up the database**
   
   Run the SQL schema in your Neon database:
   ```bash
   # Copy the content of database/schema.sql and run it in your Neon SQL editor
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Neon Database Configuration

1. Create a new database at [Neon.tech](https://neon.tech)
2. Copy your connection string
3. Run the SQL schema from `database/schema.sql`
4. Update your `.env.local` with the DATABASE_URL

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/components/sections/hero-section.tsx** - Hero section content
2. **src/components/sections/about-section.tsx** - About section
3. **src/components/sections/contact-section.tsx** - Contact information
4. **src/app/layout.tsx** - Metadata and SEO information

### 3D Elements

- Replace Spline scene URL in `src/components/sections/hero-section.tsx`
- Create your own Spline scenes at [spline.design](https://spline.design)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## 📞 Contact

- **Ahmed Attafi**
- **Email**: ahmed.attafi@example.com
- **LinkedIn**: [ahmed-attafi](https://www.linkedin.com/in/ahmed-attafi/)
- **GitHub**: [Attafii](https://github.com/Attafii)

---

**Built with ❤️ and lots of ☕ by Ahmed Attafi**
