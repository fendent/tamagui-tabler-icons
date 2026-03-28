import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconDeviceWatchFilled = themed(memo(function (props) {
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
      d: "M15 2a1 1 0 0 1 1 1v2.126c1.726 .445 3 2.01 3 3.874v6a4 4 0 0 1 -3 3.874v2.126a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2.126a4 4 0 0 1 -3 -3.874v-6a4 4 0 0 1 3 -3.874v-2.126a1 1 0 0 1 1 -1zm-1 17h-4v1h4zm0 -15h-4v1h4z"
    })
  });
}));
export { IconDeviceWatchFilled };
