import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsMove = themed(memo(function (props) {
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
      d: "M18 9l3 3l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 9l-3 3l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 18l3 3l3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 6l-3 -3l-3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v6",
      stroke: color
    })]
  });
}));
export { IconArrowsMove };
