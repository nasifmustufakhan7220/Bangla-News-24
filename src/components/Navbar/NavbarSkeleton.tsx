const NavbarSkeleton = () => {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-5 px-4 py-4 sm:gap-7">
        {/* Navbar item skeletons */}
        {[4, 6, 3, 5, 4, 3, 4, 3].map((width, index) => (
          <div
            key={index}
            className="h-4 animate-pulse rounded-sm bg-gray-200"
            style={{ width: `${width * 8}px` }}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavbarSkeleton;
