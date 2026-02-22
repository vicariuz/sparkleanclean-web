import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Blog from './Blog.jsx'
import BlogPost from './BlogPost.jsx'
import ResidentialCleaning from './ResidentialCleaning.jsx'
import CommercialCleaning from './CommercialCleaning.jsx'
import DeepCleaning from './DeepCleaning.jsx'
import MoveOutCleaning from './MoveOutCleaning.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/residential-cleaning-lafayette" element={<ResidentialCleaning />} />
        <Route path="/commercial-cleaning-lafayette" element={<CommercialCleaning />} />
        <Route path="/deep-cleaning-lafayette" element={<DeepCleaning />} />
        <Route path="/move-out-cleaning-lafayette" element={<MoveOutCleaning />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
