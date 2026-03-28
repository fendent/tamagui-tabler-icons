import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconServerBolt = themed(memo(function (props) {
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
      d: "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 16v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15l-2 3h3l-2 3",
      stroke: color
    })]
  });
}));
export { IconServerBolt };
