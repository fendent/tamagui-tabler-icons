import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconPacmanFilled = themed(memo(function (props) {
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
      d: "M13.557 2.015a10 10 0 0 1 7.257 3.744a1 1 0 0 1 -.074 1.331l-4.912 4.91l4.912 4.91a1 1 0 0 1 .074 1.332a10 10 0 1 1 -15.112 -13.078l.235 -.242l.07 -.063a9.98 9.98 0 0 1 7.55 -2.844m-1.057 3.485c-1.02 0 -1.86 .762 -1.982 1.748l-.013 .15a1 1 0 0 0 -.005 .102a2 2 0 1 0 2 -2"
    })
  });
}));
export { IconPacmanFilled };
