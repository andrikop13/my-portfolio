const MyLogo = (props) => {
  return (
    <svg
      id="myLogo"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 300 300"
    >
      <path
        fillRule="evenodd"
        stroke={props.color || "var(--green)"}
        strokeWidth={props.stroke || "5"}
        d="M209.846 85.443l16.32 71.5-45.726 57.338H107.1l-45.726-57.338 16.32-71.5 66.075-31.82 66.076 31.82z"
      ></path>
      <text
        id="logoText"
        style={{ mixBlendMode: "lighten" }}
        fill={props.color || "var(--green)"}
        strokeWidth="0"
        dx="0"
        dy="0"
        fontFamily='"ePiHgLp7XcT1:::Lora"'
        fontSize="64"
        fontStyle="italic"
        fontWeight={props.fontWeight || "400"}
        textDecoration="none"
        transform="translate(102.394 154.345)"
      >
        <tspan y="0">AA</tspan>
      </text>
    </svg>
  );
  // return (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     id="myLogo"
  //     shapeRendering="geometricPrecision"
  //     textRendering="geometricPrecision"
  //     viewBox="0 0 300 300"
  //   >
  //     <ellipse
  //       fill="#0a192f"
  //       stroke={props.color || "var(--green)"}
  //       strokeMiterlimit="7"
  //       strokeWidth="7"
  //       rx="100.399"
  //       ry="100.399"
  //       transform="translate(169.322 146.617)"
  //     ></ellipse>
  //     <text
  //       id="logoText"
  //       fill="#64ffda"
  //       strokeWidth="0"
  //       dx="0"
  //       dy="0"
  //       fontFamily='"euqzKCs0aJi1:::Slabo 27px"'
  //       fontSize="78"
  //       fontWeight={props.fontWeight || "400"}
  //       transform="translate(114.322 167.845)"
  //     >
  //       <tspan y="0">AA</tspan>
  //     </text>
  //     <style></style>
  //   </svg>
  // );
};

export default MyLogo;
