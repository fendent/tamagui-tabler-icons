import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceDesktopPause = themed(memo(function (props) {
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
      d: "M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 17v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 17v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 20h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16v4",
      stroke: color
    })]
  });
}));
export { IconDeviceDesktopPause };
