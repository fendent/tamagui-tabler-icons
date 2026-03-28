import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx } from "react/jsx-runtime";
const IconBrandOnedrive = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: /* @__PURE__ */jsx(Path, {
      d: "M18.456 10.45a6.45 6.45 0 0 0 -12 -2.151a4.857 4.857 0 0 0 -4.44 5.241a4.856 4.856 0 0 0 5.236 4.444h10.751a3.771 3.771 0 0 0 3.99 -3.54a3.772 3.772 0 0 0 -3.538 -3.992l.001 -.002",
      stroke: color
    })
  });
}));
export { IconBrandOnedrive };
