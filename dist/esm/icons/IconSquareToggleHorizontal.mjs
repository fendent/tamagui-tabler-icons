import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSquareToggleHorizontal = themed(memo(function (props) {
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
      d: "M22 12h-20",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 20a2 2 0 0 0 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18a2 2 0 0 0 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 20l-4 0",
      stroke: color
    })]
  });
}));
export { IconSquareToggleHorizontal };
