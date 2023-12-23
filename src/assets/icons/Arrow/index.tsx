export const ArrowDownIcon = ({
  color = "white",
  height = "12",
  width = "11",
}: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.146425 7.00001L5.14641 12L5.85352 12L10.8535 7.00001L10.1464 6.2929L5.99997 10.4393L5.99997 1.38808e-05L4.99997 1.37934e-05L4.99997 10.4393L0.853532 6.2929L0.146425 7.00001Z"
        fill={color}
      />
    </svg>
  );
};

export const ArrowUpIcon = ({
  color = "white",
  height = "12",
  width = "11",
}: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8536 4.99999L5.85359 0H5.14648L0.146484 4.99999L0.853592 5.7071L5.00003 1.56066V12H6.00003V1.56066L10.1465 5.7071L10.8536 4.99999Z"
        fill={color}
      />
    </svg>
  );
};
