export const DebugIcon = ({
  color = "white",
  height = "24",
  width = "24",
}: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.96 13.52L9.6 14.8C9.38667 14 8.93333 13.3333 8.24 12.8C7.6 12.2667 6.85333 12 6 12C5.14667 12 4.37333 12.2667 3.68 12.8C3.04 13.3333 2.61333 14 2.4 14.8L1.04 13.52L0 14.56L1.76 16.24L1.52 16.48V18H0V19.52H1.52V19.6C1.57333 20.08 1.70667 20.56 1.92 21.04L0 22.96L1.04 24L2.72 22.32C3.09333 22.8533 3.57333 23.28 4.16 23.6C4.74667 23.8667 5.36 24 6 24C6.64 24 7.25333 23.8667 7.84 23.6C8.42667 23.28 8.90667 22.8533 9.28 22.32L10.96 24L12 22.96L10.08 20.96C10.2933 20.5333 10.4267 20.0533 10.48 19.52V19.44H12V18H10.48V16.48L10.32 16.24L12 14.56L10.96 13.52ZM6 13.52C6.64 13.52 7.17333 13.7333 7.6 14.16C8.02667 14.5867 8.24 15.12 8.24 15.76H3.76C3.76 15.12 3.97333 14.5867 4.4 14.16C4.82667 13.7333 5.36 13.52 6 13.52ZM9.04 19.52C8.93333 20.32 8.58667 21.0133 8 21.6C7.46667 22.1333 6.8 22.4267 6 22.48C5.2 22.4267 4.50667 22.1333 3.92 21.6C3.38667 21.0133 3.09333 20.32 3.04 19.52V17.28H9.04V19.52ZM23.76 9.6V10.88L13.52 17.36V15.6L22 10.24L9.04 2V11.44C8.56 11.12 8.05333 10.88 7.52 10.72V0.639999L8.64 0L23.76 9.6Z"
        fill={color}
      />
    </svg>
  );
};