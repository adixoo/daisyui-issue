// made for - (main)/layout.js
import Navbar from "../common/Navbar/Navbar";
import Wrapper from "../common/Wrapper/Wrapper";
// import SideAndBottomNavbar from "../common/SideAndBottomNavbar/SideAndBottomNavbar";
export default function MainLayoutComponent({ children }) {
  return (
    <>
      <Navbar />

      <Wrapper className="flex flex-row gap-6">
        <main className="w-full">{children}</main>
      </Wrapper>
      <div className="hidden">
        <footer>Hello</footer>
      </div>
    </>
  );
}
