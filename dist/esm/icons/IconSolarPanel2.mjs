import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSolarPanel2 = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M8 2a4 4 0 1 0 8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 3h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 3h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.2 7.2l.707 .707",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.8 7.2l-.7 .7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 17h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 13l-1 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 13l1 8",
      stroke: color
    })]
  });
}));
export { IconSolarPanel2 };
