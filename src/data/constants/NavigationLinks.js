import {
   BsHouseDoor,
   BsHouseDoorFill,
   BsMap,
   BsMapFill,
   BsBell,
   BsBellFill,
   BsJournalBookmark,
   BsJournalBookmarkFill,
} from "react-icons/bs";

export const NavigationLinks = [
   {
      href: "/",
      name: "Home",
      icon: <BsHouseDoor className="icon-nav" />,
      activeIcon: <BsHouseDoorFill className="icon-nav" />,
   },
   {
      href: "/explore",
      name: "Explore",
      icon: <BsMap className="icon-nav" />,
      activeIcon: <BsMapFill className="icon-nav" />,
   },
   {
      href: "/notification",
      name: "Notification",
      icon: <BsBell className="icon-nav" />,
      activeIcon: <BsBellFill className="icon-nav" />,
   },
   {
      href: "/bookmark",
      name: "Bookmarks",
      icon: <BsJournalBookmark className="icon-nav" />,
      activeIcon: <BsJournalBookmarkFill className="icon-nav" />,
   },
];
