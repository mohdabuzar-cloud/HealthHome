import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { CareProcessPage } from "./pages/CareProcessPage";
import { WhyChooseUsPage } from "./pages/WhyChooseUsPage";
import { ReferralPartnersPage } from "./pages/ReferralPartnersPage";
import { BookingPage } from "./pages/BookingPage";
import { CityPage } from "./pages/CityPage";
import { CITIES } from "./data/constants";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminLeads } from "./pages/admin/AdminLeads";
import { AdminChats } from "./pages/admin/AdminChats";
import { AdminAnalytics } from "./pages/admin/AdminAnalytics";
import { AdminSettings } from "./pages/admin/AdminSettings";

export const router = createBrowserRouter([
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "leads", Component: AdminLeads },
      { path: "chats", Component: AdminChats },
      { path: "analytics", Component: AdminAnalytics },
      { path: "settings", Component: AdminSettings },
    ],
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about-us", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:serviceId", Component: ServiceDetailPage },
      { path: "contact", Component: ContactPage },
      { path: "care-process", Component: CareProcessPage },
      { path: "why-choose-us", Component: WhyChooseUsPage },
      { path: "referral-partners", Component: ReferralPartnersPage },
      { path: "booking", Component: BookingPage },
      ...CITIES.map((city) => ({
        path: `home-care-${city.toLowerCase().replace(" ", "-")}`,
        Component: CityPage,
      })),
      { path: "*", Component: HomePage },
    ],
  },
]);
