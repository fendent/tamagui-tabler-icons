import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandWalmart = themed(memo(function (props) {
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
      d: "M12 8.04v-5.04",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.5 10l4.5 -2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.5 14l4.5 2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15.96v5.04",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 14l-4.5 2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.5 10l-4.5 -2.505",
      stroke: color
    })]
  });
}));
export { IconBrandWalmart };
