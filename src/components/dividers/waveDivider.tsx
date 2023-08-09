export default function WaveDivider({
  placement,
}: {
  placement: "top" | "bottom";
}) {
  const fixAlign = placement === "top" ? "1px" : "-1px";
  const topColor = placement === "top" ? "#083344" : "#f8fafc";
  const bottomColor = placement === "top" ? "#f8fafc" : "#083344";

  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block"
        style={{
          backgroundColor: bottomColor,
          transform: `translateY(${fixAlign})`,
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          style={{ fill: topColor }}
        ></path>
      </svg>
    </div>
  );
}
