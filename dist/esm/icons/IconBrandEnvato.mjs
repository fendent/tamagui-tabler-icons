import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandEnvato = themed(memo(function (props) {
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
      d: "M4.711 17.875c-.534 -1.339 -1.35 -4.178 .129 -6.47c1.415 -2.193 3.769 -3.608 5.099 -4.278l-5.229 10.748l.001 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.715 12.508c-.54 3.409 -2.094 6.156 -4.155 7.348c-4.069 2.353 -8.144 .45 -9.297 -.188c.877 -1.436 4.433 -7.22 6.882 -10.591c2.714 -3.737 5.864 -5.978 6.565 -6.077c0 .201 .03 .55 .071 1.03c.144 1.709 .443 5.264 -.066 8.478",
      stroke: color
    })]
  });
}));
export { IconBrandEnvato };
