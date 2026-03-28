import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAdjustmentsHorizontal = themed(memo(function (props) {
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
      d: "M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6l8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 6l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12l10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18l11 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 18l1 0",
      stroke: color
    })]
  });
}));
export { IconAdjustmentsHorizontal };
