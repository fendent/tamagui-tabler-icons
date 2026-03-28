import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMarkdownOff = themed(memo(function (props) {
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
      d: "M9 5h10a2 2 0 0 1 2 2v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15v-6l2 2l1 -1m1 1v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.5 13.5l.5 -.5m-2 -1v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconMarkdownOff };
