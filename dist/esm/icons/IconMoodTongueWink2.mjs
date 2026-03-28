import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMoodTongueWink2 = themed(memo(function (props) {
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
      d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 10c.5 -1 2.5 -1 3 0",
      stroke: color
    })]
  });
}));
export { IconMoodTongueWink2 };
