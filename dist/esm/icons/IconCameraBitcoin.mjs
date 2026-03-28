import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCameraBitcoin = themed(memo(function (props) {
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
      d: "M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.477 11.307a3 3 0 1 0 -2.477 4.693",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 15v-1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22.5v-1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 18h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18h.5a1.5 1.5 0 0 1 0 3h-3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18h.5a1.5 1.5 0 0 0 0 -3h-3.5",
      stroke: color
    })]
  });
}));
export { IconCameraBitcoin };
