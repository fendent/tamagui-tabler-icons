import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDeviceGamepad2 = themed(memo(function (props) {
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
      d: "M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 9v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10h2",
      stroke: color
    })]
  });
}));
export { IconDeviceGamepad2 };
