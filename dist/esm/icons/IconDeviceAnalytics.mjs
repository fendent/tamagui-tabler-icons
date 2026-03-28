import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceAnalytics = themed(memo(function (props) {
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
      d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 20l10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 16l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12l3 -3l2 2l3 -3",
      stroke: color
    })]
  });
}));
export { IconDeviceAnalytics };
