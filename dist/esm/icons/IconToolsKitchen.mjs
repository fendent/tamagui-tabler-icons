import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconToolsKitchen = themed(memo(function (props) {
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
      d: "M4 3h8l-1 9h-6l-1 -9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 18h2v3h-2l0 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15v6h-1v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12l0 6",
      stroke: color
    })]
  });
}));
export { IconToolsKitchen };
