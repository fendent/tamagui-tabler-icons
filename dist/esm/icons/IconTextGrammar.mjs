import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTextGrammar = themed(memo(function (props) {
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
      d: "M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12v-5a3 3 0 1 1 6 0v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 9h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 6v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 20h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20l2 2l5 -5",
      stroke: color
    })]
  });
}));
export { IconTextGrammar };
