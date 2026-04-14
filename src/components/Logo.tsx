const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <span className={`text-[1.5rem] font-semibold tracking-tight text-black dark:text-white uppercase ${className}`}>
      ORΛR
    </span>
  );
};

export default Logo;
