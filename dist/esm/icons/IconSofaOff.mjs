import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSofaOff = themed(memo(function (props) {
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
      d: "M18 14v-1a2 2 0 1 1 4 0v5m-3 1h-16a1 1 0 0 1 -1 -1v-5a2 2 0 1 1 4 0v1h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 11v-3c0 -1.082 .573 -2.03 1.432 -2.558m3.568 -.442h8a3 3 0 0 1 3 3v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v3m0 4v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSofaOff };
