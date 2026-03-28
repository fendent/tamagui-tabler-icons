import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandTed = themed(memo(function (props) {
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
      d: "M2 8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 8h-4v8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12h2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2",
      stroke: color
    })]
  });
}));
export { IconBrandTed };
