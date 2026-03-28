import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconBrandPatreonFilled = themed(memo(function (props) {
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
      d: "M7.462 3.1c2.615 -1.268 6.226 -1.446 9.063 -.503c2.568 .853 4.471 3.175 4.475 5.81c.004 3.061 -1.942 5.492 -4.896 6.243c-1.693 .43 -2.338 .75 -2.942 1.582c-.238 .328 -.45 .745 -.796 1.533l-.22 .5c-1.146 2.601 -2.156 3.762 -4.236 3.735c-2.232 -.03 -3.603 -1.742 -4.313 -4.48c-.458 -1.768 -.617 -3.808 -.594 -5.876c.044 -3.993 1.42 -7.072 4.46 -8.545z"
    })
  });
}));
export { IconBrandPatreonFilled };
