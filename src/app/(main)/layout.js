// layout imported from HomeLayout.jsx

// shared layout of - /
//                    /explore
//                    /notifications
//                    /saved

// Components

// import MainLayoutComponent from "@/components/layout/MainLayout";

// made because <Navbar/>, <SideAndBottomNavbar/> and <Footer/> is common for some pages
export default function MainLayout({ children }) {
  return (
    <>
      {children}
      {/* <MainLayoutComponent>{children}</MainLayoutComponent> */}
    </>
  );
}
