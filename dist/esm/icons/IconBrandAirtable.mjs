import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandAirtable = themed(memo(function (props) {
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
      d: "M3 10v8l7 -3v-2.6l-7 -2.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6l9 3l9 -3l-9 -3l-9 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12.3v8.7l7 -3v-8l-7 2.3",
      stroke: color
    })]
  });
}));
export { IconBrandAirtable };
