import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceDesktopPin = themed(memo(function (props) {
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
      d: "M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 20h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16v4",
      stroke: color
    })]
  });
}));
export { IconDeviceDesktopPin };
