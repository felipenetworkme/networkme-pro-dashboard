
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreateCVMethod from "./pages/CreateCVMethod";
import CreateCVForm from "./pages/CreateCVForm";
import Maestro from "./pages/Maestro";
import Conteudos from "./pages/Conteudos";
import Eventos from "./pages/Eventos";
import EntrevistaIAConfig from "./pages/EntrevistaIAConfig";
import EntrevistaIASimulacao from "./pages/EntrevistaIASimulacao";
import EntrevistaIAFeedback from "./pages/EntrevistaIAFeedback";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/maestro" element={<Maestro />} />
          <Route path="/create-cv" element={<CreateCVMethod />} />
          <Route path="/create-cv-form" element={<CreateCVForm />} />
          <Route path="/entrevista-ia" element={<EntrevistaIAConfig />} />
          <Route path="/entrevista-ia/simulacao" element={<EntrevistaIASimulacao />} />
          <Route path="/entrevista-ia/feedback" element={<EntrevistaIAFeedback />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
