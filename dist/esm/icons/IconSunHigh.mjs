import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSunHigh = themed(memo(function (props) {
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
      d: "M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.343 17.657l-1.414 1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.343 6.343l-1.414 -1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.657 6.343l1.414 -1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.657 17.657l1.414 1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 20v2",
      stroke: color
    })]
  });
}));
export { IconSunHigh };
