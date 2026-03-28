import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBluetoothConnected = themed(memo(function (props) {
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
      d: "M7 8l10 8l-5 4l0 -16l5 4l-10 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l1 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12l1 0",
      stroke: color
    })]
  });
}));
export { IconBluetoothConnected };
