import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconEngineFilled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 4a1 1 0 0 1 0 2h-1v1h.383a2 2 0 0 1 1.787 1.106l1.45 2.894h.38v-1a1 1 0 0 1 .883 -.993l.117 -.007h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -1 -1v-1h-1v1a2 2 0 0 1 -1.85 1.995l-.15 .005h-3.465a2 2 0 0 1 -1.664 -.89l-1.407 -2.11h-1.464a1 1 0 0 1 -.993 -.883l-.007 -.117v-2h-1v2a1 1 0 0 1 -2 0v-6a1 1 0 1 1 2 0v2h1v-2a1 1 0 0 1 1 -1h1.584l1.709 -1.707a1 1 0 0 1 .576 -.284l.131 -.009h1v-1h-1a1 1 0 1 1 0 -2z"
    })
  });
}));
export { IconEngineFilled };
