import navLogo from "../Assets/nav-logo.svg";
import { useContext } from "react";
import { UIContext } from "../Context/UIContext";

const Navbar = () => {
  const { state, dispatch } = useContext(UIContext);

  return (
    <nav className='px-4 flex justify-between border-b-[1px] items-center h-14'>
      <img src={navLogo} alt='smallcase logo' />
      <div className='mx-8  w-full relative'>
        <input
          value={state.input}
          type='text'
          className='h-9 rounded-[4px] border-[#DDE0E4]  w-full text-xs'
          placeholder='Search by name or ticker'
          onChange={(e) => {
            dispatch({ type: "input", payload: e.target.value });
          }}
        />
        {state.input.length > 0 && state.input.length < 3 ? (
          <div className='absolute w-full bg-white shadow-3charbox rounded-sm text-smallgrey p-4 top-10'>
            <p className='font-med text-sm text-def'>
              Type at least 3 characters
            </p>
            <p className='text-light  text-xs'>to start searching</p>
          </div>
        ) : null}
      </div>
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
