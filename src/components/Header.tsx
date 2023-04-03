import { NavLink } from 'react-router-dom';

const StyledNavLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? ''
          : isActive
          ? 'text-teal-300 transition-all link'
          : 'transition-all text-white link'
      }
    >
      {children}
    </NavLink>
  );
};

const index = () => {
  return (
    <header className='bg-[#191B21] w-full sticky top-0 z-10'>
      {/* <div className='bg-gradient-to-r from-teal-500 to-emerald-500 h-1'></div> */}
      <nav className='max-w-[1440px] mx-auto p-5 shadow-md'>
        <ul className='flex gap-4'>
          <StyledNavLink to='/'>Home</StyledNavLink>
          {/* <StyledNavLink to='projects'>Projects</StyledNavLink>
          <StyledNavLink to='blog'>Blog</StyledNavLink> */}
          <StyledNavLink to='about'>About</StyledNavLink>
        </ul>
      </nav>
    </header>
  );
};

export default index;
