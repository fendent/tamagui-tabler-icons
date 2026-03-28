import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGrill = themed(memo(function (props) {
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
      d: "M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 14l1 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 14l-3 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 18h-8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 5v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 5v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 5v-1",
      stroke: color
    })]
  });
}));
export { IconGrill };
