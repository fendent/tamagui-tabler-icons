import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowAutofitLeft = themed(memo(function (props) {
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
      d: "M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18h-17",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 15l-3 3l3 3",
      stroke: color
    })]
  });
}));
export { IconArrowAutofitLeft };
