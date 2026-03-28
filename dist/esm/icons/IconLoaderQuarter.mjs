import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLoaderQuarter = themed(memo(function (props) {
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
      d: "M12 6l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12l-3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.75 7.75l-2.15 -2.15",
      stroke: color
    })]
  });
}));
export { IconLoaderQuarter };
