export const CloseIcon = ({
  color = "#CCCCCC",
  height = "9",
  width = "10",
}: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5.19333L8.62667 8.87333L9.37333 8.12667L5.69333 4.5L9.37333 0.873333L8.62667 0.126666L5 3.80667L1.37333 0.126666L0.626667 0.873333L4.30667 4.5L0.626667 8.12667L1.37333 8.87333L5 5.19333Z"
        fill={color}
      />
    </svg>
  );
};
