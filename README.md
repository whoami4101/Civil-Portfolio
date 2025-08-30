# Civil Engineering Portfolio Website

A modern, responsive portfolio website built for civil engineering professionals to showcase their expertise, projects, and services.

## 🏗️ Features

- **Modern Design**: Clean, professional interface built with React and TypeScript
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based Architecture**: Built with reusable UI components using Shadcn/ui
- **Fast Performance**: Optimized with Vite for lightning-fast development and builds
- **Professional Sections**:
  - Hero section with compelling introduction
  - About section for professional background
  - Services showcase (Geotechnical, Environmental, Geology, Inspection, Instrumentation)
  - Projects portfolio
  - Contact information
  - Footer with additional details

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Custom professional icons for civil engineering services
- **Deployment**: Ready for GitHub Pages, Vercel, or Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/whoami4101/Civil-Portfolio.git
   cd Civil-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
civil/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── About.tsx     # About section
│   │   ├── Contact.tsx   # Contact section
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Projects.tsx  # Projects showcase
│   │   └── Services.tsx  # Services section
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors and Styling
The website uses Tailwind CSS for styling. You can customize colors, fonts, and other design elements in the `tailwind.config.ts` file.

### Content
Update the content in the respective component files:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Services.tsx` - Services and expertise
- `src/components/Projects.tsx` - Project showcase
- `src/components/Contact.tsx` - Contact information

### Images
Replace images in the `src/assets/` directory with your own professional photos and icons.

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Development

### Adding New Components
1. Create new component files in `src/components/`
2. Import and use Shadcn/ui components from `src/components/ui/`
3. Follow the existing component structure and styling patterns

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow the existing color scheme and design patterns
- Ensure responsive design for all screen sizes
- Maintain accessibility standards

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

**Built with ❤️ for Civil Engineering Professionals**
