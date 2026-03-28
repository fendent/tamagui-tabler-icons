import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandMatrix = themed(memo(function (props) {
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
      d: "M4 3h-1v18h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 21h1v-18h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 9v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5",
      stroke: color
    })]
  });
}));
export { IconBrandMatrix };
