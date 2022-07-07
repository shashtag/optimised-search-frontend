import navLogo from "../Assets/nav-logo.svg";
import { useContext } from "react";
import { UIContext } from "../Context/UIContext";

const Navbar = () => {
  const { state, dispatch } = useContext(UIContext);

  return (
    <nav className='px-4 flex justify-between border-b-[1px] items-center h-14'>
      <img src={navLogo} alt='smallcase logo' />
      <input
        value={state.input}
        type='text'
        className='h-9 rounded-[4px] border-[#DDE0E4] w-full mx-8 text-xs'
        placeholder='Search by name or ticker'
        onChange={(e) => {
          dispatch({ type: "input", payload: e.target.value });
        }}
      />
      <img
        height='36px'
        width='36px'
        src='https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/64/000000/external-hamburger-ui-essential-febrian-hidayat-flat-febrian-hidayat.png'
        alt='nav drawer icon'
      />
    </nav>
  );
};

export default Navbar;
