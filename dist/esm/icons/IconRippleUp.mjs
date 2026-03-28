import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRippleUp = themed(memo(function (props) {
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
      d: "M3 7q 4.5 -3 9 0t 9 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 17q 4.5 -3 9 0q .218 .144 .434 .275",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12q 4.5 -3 9 0q 1.941 1.294 3.882 1.472",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 22v-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 19l-3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconRippleUp };
