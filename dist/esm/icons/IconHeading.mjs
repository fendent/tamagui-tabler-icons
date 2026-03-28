import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHeading = themed(memo(function (props) {
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
      d: "M7 12h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 5v14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5v14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 19h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 5h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 19h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 5h4",
      stroke: color
    })]
  });
}));
export { IconHeading };
