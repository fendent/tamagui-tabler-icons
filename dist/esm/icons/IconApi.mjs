import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconApi = themed(memo(function (props) {
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
      d: "M4 13h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5",
      stroke: color
    })]
  });
}));
export { IconApi };
