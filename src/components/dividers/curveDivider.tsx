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
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          style={{ fill: topColor }}
        ></path>
      </svg>
    </div>
  );
}
