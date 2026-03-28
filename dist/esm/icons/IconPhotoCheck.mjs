import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhotoCheck = themed(memo(function (props) {
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
      d: "M15 8h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l.5 .5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 19l2 2l4 -4",
      stroke: color
    })]
  });
}));
export { IconPhotoCheck };
