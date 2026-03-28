import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPhotoSensor2 = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    })]
  });
}));
export { IconPhotoSensor2 };
