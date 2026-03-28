import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTableColumn = themed(memo(function (props) {
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
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10h11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 3v18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 3l-6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 7l-7 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12l-7 7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 17l-4 4",
      stroke: color
    })]
  });
}));
export { IconTableColumn };
