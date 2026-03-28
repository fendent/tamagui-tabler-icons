import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFenceFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M19 17v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-3z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 17v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-3z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.707 3.293l2 2a1 1 0 0 1 .293 .707v5h-6v-5a1 1 0 0 1 .293 -.707l2 -2a1 1 0 0 1 1.414 0"
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.707 3.293l2 2a1 1 0 0 1 .293 .707v5h-6v-5a1 1 0 0 1 .293 -.707l2 -2a1 1 0 0 1 1.414 0"
    })]
  });
}));
export { IconFenceFilled };
