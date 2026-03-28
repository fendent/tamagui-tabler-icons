import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLayoutBoardSplit = themed(memo(function (props) {
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
      d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 9h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v16",
      stroke: color
    })]
  });
}));
export { IconLayoutBoardSplit };
