import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLanguageOff = themed(memo(function (props) {
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
      d: "M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 18h-5.1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.747 8.748c-.66 2.834 -2.536 4.252 -4.747 4.252",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6.371l2.371 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 9c0 2.144 2.252 3.908 6 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconLanguageOff };
