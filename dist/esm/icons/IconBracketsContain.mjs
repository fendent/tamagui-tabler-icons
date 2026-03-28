import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBracketsContain = themed(memo(function (props) {
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
      d: "M7 4h-4v16h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 4h4v16h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 16h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 16h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16h.01",
      stroke: color
    })]
  });
}));
export { IconBracketsContain };
