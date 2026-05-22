import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/SiteLayout";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Divisions from "./pages/Divisions";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/divisions" element={<Divisions />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;











// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { SiteLayout } from "@/components/SiteLayout";
// import Index from "./pages/Index.tsx";
// import About from "./pages/About.tsx";
// import Services from "./pages/Services.tsx";
// import Divisions from "./pages/Divisions.tsx";
// import Industries from "./pages/Industries.tsx";
// import Projects from "./pages/Projects.tsx";
// import Insights from "./pages/Insights.tsx";
// import Contact from "./pages/Contact.tsx";
// import NotFound from "./pages/NotFound.tsx";
// import Terms from "./pages/Terms.tsx";
// import Privacy from "./pages/Privacy.tsx";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <SiteLayout>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/divisions" element={<Divisions />} />
//             <Route path="/industries" element={<Industries />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/insights" element={<Insights />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/privacy-policy" element={<Privacy />} />
//             <Route path="/terms-of-service" element={<Terms />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </SiteLayout>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
