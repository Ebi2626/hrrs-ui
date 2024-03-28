import { Accomodation } from "./pages/accomodation/Accomodation";
import { Activities } from "./pages/activities/Activities";
import { Contact } from "./pages/contact/Contact";
import { DiningAndBars } from "./pages/diningAndBars/DiningAndBars";
import { Events } from "./pages/events/Events";
import { Gallery } from "./pages/gallery/Gallery";
import { Home } from "./pages/home/Home";
import { Location } from "./pages/Location/Location";

export const routerPaths = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/accomodation",
      element: <Accomodation />,
    },
    {
      path: "/activities",
      element: <Activities />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/dining",
      element: <DiningAndBars />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/location",
      element: <Location />,
    },
  ];