import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSubtitles = themed(memo(function (props) {
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
      d: "M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3l12 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12h-1",
      stroke: color
    })]
  });
}));
export { IconSubtitles };
