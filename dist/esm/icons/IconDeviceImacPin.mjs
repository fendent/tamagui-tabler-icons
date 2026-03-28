import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceImacPin = themed(memo(function (props) {
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
      d: "M12 17h-8a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13h11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 21h4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 17l-.5 4",
      stroke: color
    })]
  });
}));
export { IconDeviceImacPin };
