const MyLogo = (props) => {
  return (
    <svg
      id="myLogo"
      xmlns="https://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 300 300"
    >
      <path
        fillRule="evenodd"
        stroke={props.color || "var(--green)"}
        strokeWidth={props.stroke || "9"}
        strokeLinejoin="round"
        d="M209.846 85.443l16.32 71.5-45.726 57.338H107.1l-45.726-57.338 16.32-71.5 66.075-31.82 66 31.4z"
      ></path>
      <text
        id="logoText"
        style={{ mixBlendMode: "lighten" }}
        fill={props.color || "var(--green)"}
        strokeWidth="0"
        dx="0"
        dy="0"
        fontFamily='"Times"'
        fontSize="64"
        fontWeight={props.fontWeight || "400"}
        textDecoration="none"
        transform="translate(100.394 154.345)"
      >
        <tspan y="0">AA</tspan>
      </text>
    </svg>
  );
};

export default MyLogo;
