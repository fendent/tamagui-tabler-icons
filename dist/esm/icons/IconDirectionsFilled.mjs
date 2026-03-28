import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconDirectionsFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M10 22a1 1 0 0 1 0 -2h1v-2.001l-5 .001a1 1 0 0 1 -.707 -.293l-2 -2a1 1 0 0 1 0 -1.414l2 -2a1 1 0 0 1 .707 -.293l5 -.001v-1.999h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h3v-1a1 1 0 0 1 2 0v1h6a1 1 0 0 1 .707 .293l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1 -.707 .293h-6v1.999l1 .001a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1l-1 -.001v2.001h1a1 1 0 0 1 0 2z"
    })
  });
}));
export { IconDirectionsFilled };
