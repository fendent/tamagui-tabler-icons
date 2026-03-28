import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFishBone = themed(memo(function (props) {
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
      d: "M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56a6.97 6.97 0 0 0 1.699 4.571c1.914 -.684 3.691 -2.183 5.301 -4.565c-1.613 -2.384 -3.394 -3.883 -5.312 -4.565",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2 9.504a40.73 40.73 0 0 0 2.422 2.504a39.679 39.679 0 0 0 -2.422 2.498",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 11v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.422 12h10.578",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 8v8",
      stroke: color
    })]
  });
}));
export { IconFishBone };
