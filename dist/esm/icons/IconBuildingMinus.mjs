import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBuildingMinus = themed(memo(function (props) {
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
      d: "M3 21h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 8h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19h6",
      stroke: color
    })]
  });
}));
export { IconBuildingMinus };
