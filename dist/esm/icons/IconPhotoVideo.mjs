import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhotoVideo = themed(memo(function (props) {
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
      d: "M9 15h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12l2.296 -2.296a2.41 2.41 0 0 1 3.408 0l.296 .296",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 13.5v3l2.5 -1.5l-2.5 -1.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 6v.01",
      stroke: color
    })]
  });
}));
export { IconPhotoVideo };
