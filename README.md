📸 Photography E-Commerce Store

A full-stack e-commerce platform for a photography business — with cart, order management, and an email-based owner confirm/decline system.

🌐 Live Demo: photography-web-un.vercel.app
📁 GitHub: github.com/sahil/photography-ecom

✨ Features

🛒 Shopping Cart — Add/remove products, quantity management
📦 Order Management — Customer places order, owner gets notified via email
✅ Owner Confirm/Decline Flow — Owner clicks confirm or decline button directly from email (powered by Resend)
📧 Email Notifications — Automated transactional emails using Resend API
🖼️ Product Gallery — Browse photography products/prints/services
📱 Responsive Design — Works seamlessly on all devices


🛠️ Tech Stack
LayerTechnologyFrontendReact.js, Tailwind CSS, AxiosBackendNode.js, Express.jsDatabaseMongoDB, MongooseEmailResend APIDeploymentVercel (Frontend), Render (Backend)

🔄 Order Flow
Customer places order
       ↓
Owner receives email with order details
       ↓
Owner clicks [Confirm] or [Decline] in email
       ↓
Customer gets confirmation/rejection email
       ↓
Order status updated in DB

🚀 Getting Started
Installation
bashgit clone https://github.com/sahil/photography-ecom.git
cd photography-ecom

# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
Environment Variables
envPORT=5000
MONGO_URI=your_mongodb_uri
RESEND_API_KEY=your_resend_key
OWNER_EMAIL=owner@example.com
CLIENT_URL=http://localhost:5173
Run Locally
bash# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev

🧠 Key Learnings

Built a real-world business problem solution: email-based order approval system
Integrated Resend API for transactional emails with action buttons
Designed owner workflow that requires zero dashboard login


👨‍💻 Author
Sahil — Fresher MERN Stack Developer
📧 Sa9300421@gmail.com | 📱 +91 7080254021
