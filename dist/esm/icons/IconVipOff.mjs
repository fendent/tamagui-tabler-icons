import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconVipOff = themed(memo(function (props) {
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
      d: "M3 5h2m4 0h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 19h16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 9l2 6h1l2 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12v-3h2a2 2 0 1 1 0 4h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconVipOff };
