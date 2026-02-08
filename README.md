# Resumio - Online Resume Builder

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9.1-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, AI-powered online resume builder with live preview, multiple templates, and intelligent optimization capabilities.

## Features

- **User Authentication** - Secure sign in and sign up functionality
- **Resume Management** - Create, edit, delete, and organize multiple resumes
- **Live Preview** - Real-time resume preview with shareable online links
- **AI Optimization** - Upload and optimize resumes using Google Gemini AI
- **Image Management** - Upload profile images with automatic background removal via ImageKit
- **Multiple Templates** - Professional resume templates to choose from
- **PDF Processing** - Extract and import text from existing PDF resumes
- **Responsive Design** - Seamless experience across all devices

## Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Redux Toolkit 2.9.1** - Predictable state management
- **React Router DOM 7.9.4** - Client-side routing
- **Axios 1.12.2** - Promise-based HTTP client
- **Lucide React 0.546.0** - Beautiful icon library
- **React Hot Toast 2.6.0** - Toast notifications
- **React PDF to Text 1.3.4** - PDF text extraction

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Google Gemini AI** - AI-powered resume optimization
- **ImageKit** - Image storage and background removal

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance
- Google Gemini API key
- ImageKit account

### Installation

1. Clone the repository
```bash
git clone https://github.com/JOSIAHTHEPROGRAMMER/Resumio.git
cd Resumio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory:
```env
VITE_BASE_URL=http://localhost:3000
```

For production, use your deployed server URL.

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
Resumio/
├── _data/
│   └── repositories.json
├── .github/
│   ├── workflows/
│   ├── dependabot.yml
│   └── FUNDING.yml
├── packages/
│   ├── core/
│   └── web/
│       ├── public/
│       ├── src/
│       ├── index.html
│       └── vite.config.js
├── tools/
└── README.md
```



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini AI for resume optimization
- ImageKit for image processing
- All open-source contributors

## Support

If you find this project helpful, please give it a star on [GitHub](https://github.com/JOSIAHTHEPROGRAMMER/Resumio)!
