import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import './index.css'
import App from './App.jsx'

var vscale = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) * 2;
document.documentElement.style.setProperty('--vwh-scale', `${vscale}`);

window.addEventListener("resize", function(event) {
  vscale = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) * 2
  document.documentElement.style.setProperty('--vwh-scale', `${vscale}`);
});


const client = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
      </QueryClientProvider>,
  </StrictMode>,
)
