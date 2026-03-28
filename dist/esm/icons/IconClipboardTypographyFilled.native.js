import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconClipboardTypographyFilled = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */_jsx(Path, {
      d: "M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-2.997 5.83h-6a1 1 0 0 0 -1 1v1a1 1 0 0 0 2 0h1v4a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2v-4h1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -1 -1m-1 -8a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z"
    })
  });
}));
export { IconClipboardTypographyFilled };
