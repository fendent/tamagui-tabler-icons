import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconSquareF5Filled = themed(memo(function (props) {
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
      d: "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-2.333 6h-3l-.117 .007a1 1 0 0 0 -.857 .764l-.02 .112l-.006 .117v3l.007 .117a1 1 0 0 0 .764 .857l.112 .02l.117 .006h2v1h-1.033l-.025 -.087l-.049 -.113a1 1 0 0 0 -1.893 .45c0 .867 .63 1.587 1.458 1.726l.148 .018l.144 .006h1.25l.157 -.006a2 2 0 0 0 1.819 -1.683l.019 -.162l.005 -.149v-1l-.006 -.157a2 2 0 0 0 -1.683 -1.819l-.162 -.019l-.149 -.005h-1v-1h2l.117 -.007a1 1 0 0 0 .857 -.764l.02 -.112l.006 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006zm-6 0h-2l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117v6l.007 .117a1 1 0 0 0 .876 .876l.117 .007l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117v-2h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-1v-1h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
    })
  });
}));
export { IconSquareF5Filled };
