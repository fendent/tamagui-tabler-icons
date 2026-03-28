import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMapRoute = themed(memo(function (props) {
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
      d: "M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 13v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15l-4 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 15l4 -4",
      stroke: color
    })]
  });
}));
export { IconMapRoute };
