import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRulerOff = themed(memo(function (props) {
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
      d: "M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a1 1 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 16h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconRulerOff };
