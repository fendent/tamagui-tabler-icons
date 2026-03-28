import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCreativeCommonsNc = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 6l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15l3 3",
      stroke: color
    })]
  });
}));
export { IconCreativeCommonsNc };
