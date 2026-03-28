import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceTabletUp = themed(memo(function (props) {
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
      d: "M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.906 16.576a1 1 0 1 0 -.906 1.424",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconDeviceTabletUp };
