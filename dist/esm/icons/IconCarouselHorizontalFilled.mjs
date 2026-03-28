import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCarouselHorizontalFilled = themed(memo(function (props) {
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
      d: "M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
    })]
  });
}));
export { IconCarouselHorizontalFilled };
