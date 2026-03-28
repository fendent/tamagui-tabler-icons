import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPlaylistOff = themed(memo(function (props) {
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
      d: "M14 14a3 3 0 1 0 3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 13v-9h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 5h-4m-4 0h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 9h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 13h-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconPlaylistOff };
