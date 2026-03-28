import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandCodesandbox = themed(memo(function (props) {
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
      d: "M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25l4 2.25",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l4 -2.25l4 -2.25",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l0 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12l-4 -2.25l-4 -2.25",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12l-4 2v4.75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12l4 2l0 4.75",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 5.25l4 2.25l4 -2.25",
      stroke: color
    })]
  });
}));
export { IconBrandCodesandbox };
