import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="*" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
}

// Export App as the root component, typically mounted in `main.tsx` or `index.tsx`.
export default App;
