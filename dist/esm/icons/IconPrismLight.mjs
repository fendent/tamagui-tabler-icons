import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPrismLight = themed(memo(function (props) {
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
      d: "M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 13h4.45",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 5l-4.5 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 9l-7.75 3.25",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 15l-7 -1.5",
      stroke: color
    })]
  });
}));
export { IconPrismLight };
