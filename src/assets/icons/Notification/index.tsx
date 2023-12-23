export const NotificationIcon = ({
  color = "white",
  height = "14",
  width = "12",
}: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7133 9.24C10.4956 8.58667 10.3867 7.90222 10.3867 7.18667V5.41333C10.3867 4.85333 10.2933 4.32444 10.1067 3.82667C9.92 3.29778 9.64 2.83111 9.26667 2.42667C8.89333 1.99111 8.45778 1.64889 7.96 1.4C7.49333 1.12 6.98 0.948889 6.42 0.886667C5.79778 0.824444 5.19111 0.902222 4.6 1.12C4.00889 1.30667 3.48 1.61778 3.01333 2.05333C2.57778 2.45778 2.23556 2.94 1.98667 3.5C1.73778 4.06 1.61333 4.65111 1.61333 5.27333V7.18667C1.61333 7.90222 1.50444 8.58667 1.28667 9.24L0.773333 10.78L1.14667 11.3867H4.22667C4.22667 11.8533 4.39778 12.2578 4.74 12.6C5.08222 12.9422 5.48667 13.1133 5.95333 13.1133C6.45111 13.1133 6.87111 12.9422 7.21333 12.6C7.55556 12.2578 7.72667 11.8533 7.72667 11.3867H10.8067L11.2267 10.78L10.7133 9.24ZM6.60667 11.9933C6.42 12.18 6.20222 12.2733 5.95333 12.2733C5.73556 12.2733 5.53333 12.1956 5.34667 12.04C5.19111 11.8533 5.11333 11.6356 5.11333 11.3867H6.84C6.87111 11.6356 6.79333 11.8378 6.60667 11.9933ZM1.75333 10.5L2.08 9.52C2.36 8.77333 2.5 7.99556 2.5 7.18667V5.27333C2.5 4.77556 2.59333 4.29333 2.78 3.82667C2.99778 3.36 3.27778 2.97111 3.62 2.66C3.99333 2.31778 4.41333 2.06889 4.88 1.91333C5.37778 1.75778 5.86 1.71111 6.32667 1.77333C7.26 1.89778 8.02222 2.30222 8.61333 2.98667C8.89333 3.32889 9.11111 3.71778 9.26667 4.15333C9.42222 4.55778 9.5 4.97778 9.5 5.41333V7.18667C9.5 7.99556 9.62444 8.78889 9.87333 9.56667L10.2 10.5H1.75333Z"
        fill={color}
      />
    </svg>
  );
};