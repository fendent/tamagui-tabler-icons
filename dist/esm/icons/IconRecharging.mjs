import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRecharging = themed(memo(function (props) {
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
      d: "M7.038 4.5a9 9 0 0 0 -2.495 2.47",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.186 10.209a9 9 0 0 0 0 3.508",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.5 16.962a9 9 0 0 0 2.47 2.495",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.209 20.814a9 9 0 0 0 3.5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.962 19.5a9 9 0 0 0 2.495 -2.47",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.814 13.791a9 9 0 0 0 0 -3.508",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.5 7.038a9 9 0 0 0 -2.47 -2.495",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.791 3.186a9 9 0 0 0 -3.508 -.02",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 8l-2 4h4l-2 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21a9 9 0 0 0 0 -18",
      stroke: color
    })]
  });
}));
export { IconRecharging };
