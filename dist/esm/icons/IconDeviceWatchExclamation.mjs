import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceWatchExclamation = themed(memo(function (props) {
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
      d: "M15 18h-6a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18v3h6v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6v-3h6v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v.01",
      stroke: color
    })]
  });
}));
export { IconDeviceWatchExclamation };
