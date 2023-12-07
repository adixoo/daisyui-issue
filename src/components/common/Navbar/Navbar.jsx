import Wrapper from "../Wrapper/Wrapper";
import ElevatedButton from "../Button/ElevatedButton";
export default function Navbar() {
  return (
    <>
      <header
        id="top-navbar"
        className="navbar fixed z-10 border-b border-b-slate-700"
      >
        <Wrapper className="flex justify-between">
          <h1>Robyter</h1>
          <ElevatedButton name="Sign in" />
        </Wrapper>
      </header>
    </>
  );
}
