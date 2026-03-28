import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlaneFilled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12.868 2.504l3.712 6.496h3.42a3 3 0 0 1 0 6h-3.42l-3.712 6.496a1 1 0 0 1 -.868 .504h-3a1 1 0 0 1 -.962 -1.275l1.636 -5.725h-2.26l-1.707 1.707a1 1 0 0 1 -.707 .293h-3a1 1 0 0 1 -.894 -1.447l1.776 -3.553l-1.776 -3.553a1 1 0 0 1 .894 -1.447h3a1 1 0 0 1 .707 .293l1.707 1.707h2.26l-1.636 -5.725a1 1 0 0 1 .962 -1.275h3a1 1 0 0 1 .868 .504"
    })
  });
}));
export { IconPlaneFilled };
