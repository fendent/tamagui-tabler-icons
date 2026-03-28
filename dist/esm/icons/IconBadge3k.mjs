import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBadge3k = themed(memo(function (props) {
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
      d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 9v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 9l-2 3l2 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 12h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5",
      stroke: color
    })]
  });
}));
export { IconBadge3k };
