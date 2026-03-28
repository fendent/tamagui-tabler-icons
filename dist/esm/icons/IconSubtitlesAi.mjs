import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSubtitlesAi = themed(memo(function (props) {
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
      d: "M11.5 19h-5.5a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15h5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5",
      stroke: color
    })]
  });
}));
export { IconSubtitlesAi };
