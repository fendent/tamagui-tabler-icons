import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowMoveUp = themed(memo(function (props) {
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
      d: "M12 13v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6l3 -3l3 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4",
      stroke: color
    })]
  });
}));
export { IconArrowMoveUp };
