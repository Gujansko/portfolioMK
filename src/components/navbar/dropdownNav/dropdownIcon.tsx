export default function DropdownIcon({
  dropdownState,
}: {
  dropdownState: boolean;
}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8fafc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-menu"
      >
        <line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          className={`${
            dropdownState ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
          } duration-400 origin-right transition-all`}
        />
        <line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          className={`${
            dropdownState ? "rotate-45" : "translate-y-[6px]"
          } origin-center transition-all duration-500`}
        />
        <line
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          className={`${
            dropdownState ? "-rotate-45" : "-translate-y-[6px]"
          } origin-center transition-all duration-500`}
        />
      </svg>
    </div>
  );
}
