import MainPage from "../components/pages/MainPage";
import ContactsPage from "../components/pages/ContactsPage";
import ProfilePage from "../components/pages/ProfilePage";
import ReviewsPage from "../components/pages/ReviewsPage";
import PropertiesPage from "../components/pages/PropertiesPage";
import PropertyPage from "../components/pages/PropertyPage";
import FAQPage from "../components/pages/FAQPage";

export const userRoutes = [
    {
        path: "/main",
        Component: MainPage,
    },
    {
        path: "/profile",
        Component: ProfilePage,
    },
    {
        path: "/contacts",
        Component: ContactsPage,
    },
    {
        path: "/reviews",
        Component: ReviewsPage,
    },
    {
        path: "/properties",
        Component: PropertiesPage,
    },
    {
        path: "/properties/:id",
        Component: PropertyPage,
    },
    {
        path: "/faq",
        Component: FAQPage,
    },
];