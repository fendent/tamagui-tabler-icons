import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBook = themed(memo(function (props) {
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
      d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6l0 13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 6l0 13",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 6l0 13",
      stroke: color
    })]
  });
}));
export { IconBook };
