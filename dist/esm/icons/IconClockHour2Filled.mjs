import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconClockHour2Filled = themed(memo(function (props) {
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
      d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 3.66v5.022l.003 .054l.02 .135l.005 .025a1 1 0 0 0 .056 .165l.04 .082l.062 .099l.07 .087l.075 .074l.094 .075l.08 .052l.07 .035l.132 .051l.135 .031l.082 .01l.124 .002l.113 -.012l.108 -.024l.106 -.036l.108 -.051l.065 -.04l3.007 -2.004a1 1 0 1 0 -1.11 -1.664l-1.445 .962v-3.13a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1"
    })
  });
}));
export { IconClockHour2Filled };
