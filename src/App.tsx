import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const PodcastPage = lazy(() => import("./pages/PodcastPage"));
const PressPage = lazy(() => import("./pages/PressPage"));
const MagazinePage = lazy(() => import("./pages/MagazinePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MediaKitPage = lazy(() => import("./pages/MediaKitPage"));
const ContentCreationPage = lazy(() => import("./pages/ContentCreationPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <p className="font-heading text-2xl text-foreground/50 animate-pulse">Loading...</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/magazine" element={<MagazinePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/media-kit" element={<MediaKitPage />} />
            <Route path="/content-creation" element={<ContentCreationPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
