import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHandSanitizer = themed(memo(function (props) {
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
      d: "M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3h-6a2 2 0 0 0 -2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 3v5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 11v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 13h4",
      stroke: color
    })]
  });
}));
export { IconHandSanitizer };
