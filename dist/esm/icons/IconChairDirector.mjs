import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconChairDirector = themed(memo(function (props) {
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
      d: "M6 21l12 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12l12 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 3v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 3v9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 8h12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 5h12",
      stroke: color
    })]
  });
}));
export { IconChairDirector };
