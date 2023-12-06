interface DashIcon {
  colors: string;
}

const DashIcon = ({ colors }: DashIcon) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="6"
          height="6"
          rx="1"
          stroke={colors}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="14"
          width="6"
          height="6"
          rx="1"
          stroke={colors}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect
          x="14"
          y="14"
          width="6"
          height="6"
          rx="1"
          stroke={colors}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect
          x="14"
          y="4"
          width="6"
          height="6"
          rx="1"
          stroke={colors}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default DashIcon;