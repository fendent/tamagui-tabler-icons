import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLibraryPhoto = themed(memo(function (props) {
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
      d: "M7 5.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 7h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644",
      stroke: color
    })]
  });
}));
export { IconLibraryPhoto };
