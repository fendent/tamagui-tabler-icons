import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMedicineSyrup = themed(memo(function (props) {
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
      d: "M8 21h8a1 1 0 0 0 1 -1v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10a1 1 0 0 0 1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 7v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3",
      stroke: color
    })]
  });
}));
export { IconMedicineSyrup };
