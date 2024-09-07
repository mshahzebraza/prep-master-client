import AppRoutes from "@/routes/app-routes";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "src/shared/config/react-query.config";


function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
