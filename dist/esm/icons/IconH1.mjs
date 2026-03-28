import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconH1 = themed(memo(function (props) {
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
      d: "M19 18v-8l-2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6v12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6v12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 18h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 6h2",
      stroke: color
    })]
  });
}));
export { IconH1 };
