import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconToml = themed(memo(function (props) {
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
      d: "M1.499 8h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2.999 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 16v-8l2 5l2 -5v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8v8h2.5",
      stroke: color
    })]
  });
}));
export { IconToml };
