import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCurrentLocationOff = themed(memo(function (props) {
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
      d: "M14.685 10.661c-.3 -.6 -.795 -1.086 -1.402 -1.374m-3.397 .584a3 3 0 1 0 4.24 4.245",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642 -2.378a8 8 0 0 0 -10.597 -10.569",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCurrentLocationOff };
