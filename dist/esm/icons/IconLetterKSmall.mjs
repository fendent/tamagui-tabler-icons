import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLetterKSmall = themed(memo(function (props) {
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
      d: "M10.5 8v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 8l-3 4l3 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 12h1",
      stroke: color
    })]
  });
}));
export { IconLetterKSmall };
