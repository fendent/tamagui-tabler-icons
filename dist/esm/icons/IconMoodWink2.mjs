import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodWink2 = themed(memo(function (props) {
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
      d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 15a3.5 3.5 0 0 1 -5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.5 8.5l-1.5 1.5l1.5 1.5",
      stroke: color
    })]
  });
}));
export { IconMoodWink2 };
