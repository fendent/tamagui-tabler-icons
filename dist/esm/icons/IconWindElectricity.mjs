import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWindElectricity = themed(memo(function (props) {
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
      d: "M20 7l-3 5h4l-3 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 16h4a2 2 0 1 1 0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h8a2 2 0 1 0 0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 8h3a2 2 0 1 0 0 -4",
      stroke: color
    })]
  });
}));
export { IconWindElectricity };
