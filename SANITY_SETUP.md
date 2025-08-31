# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for your Civil Engineering Portfolio website, allowing you to manage projects, services, and content without editing code.

## 🚀 Quick Setup

### 1. Create a Sanity Account
1. Go to [sanity.io](https://www.sanity.io) and create a free account
2. Create a new project for your portfolio

### 2. Get Your Project ID
1. In your Sanity dashboard, go to Project Settings
2. Copy your Project ID (you'll need this for environment variables)

### 3. Set Up Environment Variables
1. Create a `.env` file in your project root
2. Add the following variables:
```env
VITE_SANITY_PROJECT_ID=your-actual-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

SANITY_STUDIO_PROJECT_ID=your-actual-project-id
SANITY_STUDIO_DATASET=production
```

### 4. Update Sanity Configuration
1. Open `sanity.config.js`
2. Replace `'your-project-id'` with your actual Sanity Project ID

### 5. Start Sanity Studio
```bash
npm run studio
```
This will start the Sanity Studio at `http://localhost:3333`

## 📝 Content Management

### Adding Projects
1. Go to your Sanity Studio (`http://localhost:3333`)
2. Click on "Project" in the left sidebar
3. Click "Create new" button
4. Fill in the project details:
   - **Title**: Project name
   - **Category**: Select from dropdown (Land Development, Institutional, etc.)
   - **Location**: Project location
   - **Description**: Brief project description
   - **Main Image**: Upload project image
   - **Client**: Client name (optional)
   - **Services**: Select services provided
   - **Status**: Project status
   - **Featured**: Mark as featured project
   - **Order**: Display order (lower numbers appear first)

### Adding Services
1. Go to "Service" in Sanity Studio
2. Create new service entries with:
   - **Title**: Service name
   - **Icon**: Upload service icon
   - **Description**: Service description
   - **Features**: Key features list
   - **Active**: Toggle to show/hide service

### Managing About Content
1. Go to "About" in Sanity Studio
2. Update company information:
   - Mission and vision statements
   - Team member details
   - Company statistics
   - Core values

### Updating Contact Information
1. Go to "Contact" in Sanity Studio
2. Update:
   - Contact details
   - Office locations
   - Social media links
   - Business hours

## 🔧 Deployment

### Vercel Deployment
1. Add environment variables in Vercel dashboard:
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET`
   - `VITE_SANITY_API_VERSION`

2. Deploy your project to Vercel

### Sanity Studio Deployment
```bash
npm run studio:deploy
```
This will deploy your Sanity Studio to a public URL for content management.

## 📱 Features

### What You Can Manage Through Sanity:
- ✅ **Projects**: Add, edit, delete projects with images
- ✅ **Services**: Manage service offerings and descriptions
- ✅ **About Content**: Update company information and team details
- ✅ **Contact Information**: Manage contact details and office locations
- ✅ **Images**: Upload and manage project images
- ✅ **Content**: Rich text editing for descriptions
- ✅ **Ordering**: Control display order of projects and services

### Benefits:
- 🚀 **No Code Changes**: Update content without touching code
- 📱 **Mobile Friendly**: Manage content from any device
- 🔄 **Real-time Updates**: Changes appear immediately on your website
- 🖼️ **Image Management**: Built-in image optimization and CDN
- 👥 **Team Access**: Share access with team members
- 📊 **Content History**: Track changes and revert if needed

## 🛠️ Troubleshooting

### Common Issues:

1. **Environment Variables Not Working**
   - Ensure `.env` file is in project root
   - Restart development server after adding variables
   - Check Vercel environment variables for production

2. **Images Not Loading**
   - Verify Sanity project ID is correct
   - Check CORS settings in Sanity dashboard
   - Ensure images are published in Sanity Studio

3. **Content Not Updating**
   - Check if content is published in Sanity Studio
   - Verify GROQ queries in `src/lib/sanity.js`
   - Clear browser cache

### Getting Help:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## 🎯 Next Steps

1. **Set up your Sanity project** following the steps above
2. **Add your first projects** through Sanity Studio
3. **Customize the schemas** if needed for your specific requirements
4. **Deploy to Vercel** with environment variables
5. **Share access** with team members for content management

Your portfolio is now fully manageable through a user-friendly CMS interface! 🎉
