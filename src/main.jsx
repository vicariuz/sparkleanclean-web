import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const App = lazy(() => import('./App.jsx'))
const Blog = lazy(() => import('./Blog.jsx'))
const BlogPost = lazy(() => import('./BlogPost.jsx'))
const ResidentialCleaning = lazy(() => import('./ResidentialCleaning.jsx'))
const CommercialCleaning = lazy(() => import('./CommercialCleaning.jsx'))
const DeepCleaning = lazy(() => import('./DeepCleaning.jsx'))
const MoveOutCleaning = lazy(() => import('./MoveOutCleaning.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/residential-cleaning-lafayette" element={<ResidentialCleaning />} />
          <Route path="/commercial-cleaning-lafayette" element={<CommercialCleaning />} />
          <Route path="/deep-cleaning-lafayette" element={<DeepCleaning />} />
          <Route path="/move-out-cleaning-lafayette" element={<MoveOutCleaning />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)