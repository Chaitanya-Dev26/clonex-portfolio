import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/staris.jsx'

// Initialize Lenis with enhanced smoothness
const lenis = new Lenis({
  duration: 1.2,           // duration for smoother scrolling
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smooth: true,           
  smoothTouch: false,     
  touchMultiplier: 2,     
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <App />
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
)
