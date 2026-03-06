export const Menu = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0F172A"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-menu-icon lucide-menu ${className}`}
    {...props}
  >
    <path d="M4 5h16" />
    <path d="M4 12h16" />
    <path d="M4 19h16" />
  </svg>
);
