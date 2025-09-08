# 🏗️ Construct & Co. - Professional Construction Company Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://hamnaasiif.github.io/construct-and-co/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **A modern, responsive construction company website built with React, showcasing professional services, project portfolios, and company expertise with an emphasis on user experience and visual appeal.**

## 🌟 Live Demo

**[🚀 View Live Site](https://hamnaasiif.github.io/construct-and-co/)**

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Components](#-components)
- [Pages](#-pages)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Construct & Co.** is a comprehensive, professional construction company website that demonstrates modern web development practices and showcases a full-service construction business. The project features a complete digital presence with service offerings, project portfolios, team profiles, and client engagement tools.

### 🏆 Project Highlights

- **25+ Years Experience** - Showcasing company history since 1997
- **1000+ Completed Projects** - Comprehensive project portfolio
- **6 Core Services** - Construction, Renovation, Architecture, Interior Design, Project Management, Consulting
- **Professional Team** - Certified experts with specialized skills
- **Modern Design** - Responsive, mobile-first approach
- **Interactive Features** - Dynamic modals, filtering, and user engagement

---

## ✨ Key Features

### 🏠 **Multi-Page Architecture**
- **Home** - Hero section with company overview and call-to-actions
- **About** - Company history, mission, values, and team showcase
- **Services** - Detailed service offerings with interactive modals
- **Projects** - Portfolio with filtering, featured projects, and detailed case studies
- **Blog** - Content management with featured articles and categories
- **Contact** - Contact form, company information, and Google Maps integration

### 🎨 **Interactive Components**
- **Dynamic Modals** - Service details, project showcases, and blog articles
- **Project Filtering** - Category-based portfolio filtering
- **Team Cards** - Interactive team member profiles with contact integration
- **Responsive Navigation** - Mobile-optimized menu system
- **Image Galleries** - Professional project and service imagery

### 📱 **User Experience**
- **Fully Responsive** - Optimized for all device sizes
- **Fast Loading** - Optimized images and efficient code structure
- **Accessibility** - ARIA labels and semantic HTML
- **SEO Friendly** - Proper meta tags and structured content
- **Cross-Browser Compatible** - Works across all modern browsers

### 🔧 **Technical Features**
- **Component-Based Architecture** - Reusable, maintainable components
- **State Management** - Efficient React state handling
- **Mock Data Integration** - Structured data management
- **CSS Modules** - Scoped styling for components
- **Modern JavaScript** - ES6+ features and best practices

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.x** - Modern React with hooks and functional components
- **JavaScript ES6+** - Modern JavaScript features and syntax

### **Styling & Design**
- **CSS3** - Custom styling with modern CSS features
- **Responsive Design** - Mobile-first approach with media queries
- **CSS Grid & Flexbox** - Modern layout techniques

### **Development Tools**
- **Vite** - Development environment and build tools
- **ESLint** - Code quality and consistency
- **Modern Browser APIs** - Latest web standards

### **Assets & Media**
- **Optimized Images** - Professional photography and graphics
- **Google Maps** - Embedded location services

---

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── about/
│   │   ├── TeamCard.jsx          # Team member profile cards
│   │   └── teamcard.css          # Team card styling
│   ├── blog/
│   │   ├── BlogCard.jsx          # Blog post preview cards
│   │   ├── BlogModal.jsx         # Full blog article modal
│   │   ├── blogCard.css          # Blog card styling
│   │   └── blogModal.css         # Blog modal styling
│   ├── common/
│   │   ├── Navbar.jsx            # Main navigation component
│   │   ├── Footer.jsx            # Site footer with links
│   │   └── Button.jsx            # Reusable button component
│   ├── contact/
│   │   └── ContactForm.jsx       # Contact form with validation
│   ├── home/
│   │   └── Hero.jsx              # Homepage hero section
│   └── services/
│       └── ServiceCard.jsx       # Service offering cards
├── pages/
│   ├── Home.jsx                  # Homepage with hero section
│   ├── About.jsx                 # Company information and team
│   ├── Services.jsx              # Service offerings and process
│   ├── Projects.jsx              # Project portfolio and filtering
│   ├── Blog.jsx                  # Blog articles and featured content
│   └── Contact.jsx               # Contact information and form
├── data/
│   ├── MockData.js               # Blog and content data
│   └── ProjectData.js            # Project portfolio data
├── assets/                       # Images and media files
└── App.jsx                       # Main application component
\`\`\`

---

## 🚀 Installation

### **Prerequisites**
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Git for version control

### **Quick Start**

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/hamnaasiif/construction-site-frontend.git
   cd construction-site-frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

4. **Open your browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

### **Build for Production**
\`\`\`bash
npm run build
# or
yarn build
\`\`\`

---

## 💻 Usage

### **Development Workflow**

1. **Component Development** - Create reusable components in the `components/` directory
2. **Page Creation** - Add new pages in the `pages/` directory
3. **Styling** - Use CSS modules for component-specific styles
4. **Data Management** - Update mock data in the `data/` directory
5. **Asset Management** - Add images and media to the `assets/` directory

### **Customization**

- **Branding** - Update company information in component files
- **Content** - Modify mock data files for different content
- **Styling** - Customize CSS files for different visual themes
- **Features** - Add new components and pages as needed

---

## 🧩 Components

### **Core Components**

#### **TeamCard**
\`\`\`jsx
<TeamCard 
  name="John Mitchell"
  role="CEO & Founder"
  experience="25+ Years"
  skills={["Leadership", "Strategy", "Innovation"]}
  achievement="Founder"
  social={{linkedin: "#", email: "john@constructandco.com"}}
  onContactClick={handleContact}
/>
\`\`\`

#### **ServiceCard**
\`\`\`jsx
<ServiceCard 
  service={{
    title: "Construction",
    description: "Complete construction solutions...",
    features: ["Residential", "Commercial", "Infrastructure"]
  }}
  onLearnMore={openModal}
/>
\`\`\`

#### **BlogCard**
\`\`\`jsx
<BlogCard 
  blog={{
    title: "Modern Construction Techniques",
    category: "Construction",
    date: "December 15, 2024"
  }}
  image={blogImage}
  onReadMore={handleReadMore}
/>
\`\`\`

### **Advanced Features**

- **Modal System** - Dynamic content overlays for detailed information
- **Filtering Logic** - Category-based project and content filtering
- **Responsive Navigation** - Mobile-optimized menu with smooth transitions
- **Form Handling** - Contact form with validation and user feedback

---

## 📄 Pages

### **Homepage (`/`)**
- Hero section with company tagline and statistics
- Call-to-action buttons for navigation
- Company overview and value proposition

### **About (`/about`)**
- Company history and milestones
- Mission, values, and core principles
- Team member profiles with expertise and achievements
- Interactive contact functionality

### **Services (`/services`)**
- Six core service offerings with detailed descriptions
- Interactive service modals with comprehensive information
- Process workflow explanation
- Service-specific call-to-actions

### **Projects (`/projects`)**
- Featured project showcase
- Portfolio filtering by category
- Detailed project case studies with challenges and solutions
- Client testimonials and project statistics

### **Blog (`/blog`)**
- Featured article layout
- Category-based article organization
- Full-article modal system
- Latest articles grid with pagination

### **Contact (`/contact`)**
- Contact form with validation
- Company contact information
- Google Maps integration
- Multiple communication channels

---

## ⚡ Performance

### **Optimization Features**
- **Lazy Loading** - Images loaded on demand
- **Component Optimization** - Efficient React rendering
- **CSS Optimization** - Minimal and scoped styling
- **Asset Optimization** - Compressed images and media

### **Performance Metrics**
- **First Contentful Paint** - < 2.5s
- **Largest Contentful Paint** - < 4.0s
- **Cumulative Layout Shift** - < 0.1
- **Time to Interactive** - < 5.0s

---

## 📞 Contact & Support

### **Developer**
- **GitHub** - [@hamnaasiif](https://github.com/hamnaasiif)
- **Email** - [Contact Developer](mailto:hamnaasif2601@gmail.com)
- **LinkedIn** - [LinkedIn Profile](https://www.linkedin.com/in/hamna-asif-98121936b/)

### **Project Links**
- **Live Demo** - [construction-site-frontend](https://github.com/hamnaasiif/construction-site-frontend)
- **Repository** - [GitHub Repo](https://github.com/hamnaasiif/construction-site-frontend)

---

<div align="center">

**Built with ❤️ by [Hamna Asif](https://github.com/hamnaasiif)**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
