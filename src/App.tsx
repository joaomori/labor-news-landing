import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NewsList from "./pages/admin/NewsList";
import NewsForm from "./pages/admin/NewsForm";
import NewsDetail from "./pages/NewsDetail";
import QuemSomos from "./pages/QuemSomos";
import Equipe from "./pages/Equipe";
import Contato from "./pages/Contato";
import Anuncie from "./pages/Anuncie";
import Colunistas from "./pages/Colunistas";
import Papers from "./pages/Papers";
import TVLabor from "./pages/TVLabor";
import Catalogo from "./pages/Catalogo";
import Carreira from "./pages/Carreira";
import Eventos from "./pages/Eventos";
import Newsletter from "./pages/Newsletter";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/anuncie" element={<Anuncie />} />
            <Route path="/colunistas" element={<Colunistas />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/tv" element={<TVLabor />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carreira" element={<Carreira />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="news" element={<NewsList />} />
              <Route path="news/new" element={<NewsForm />} />
              <Route path="news/:id/edit" element={<NewsForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
