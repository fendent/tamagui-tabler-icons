import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWorldBolt = themed(memo(function (props) {
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
      d: "M20.985 12.52a9 9 0 1 0 -7.52 8.36",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 15h10.9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 3a17 17 0 0 0 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 3c2.313 3.706 3.07 7.856 2.27 12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 16l-2 3h4l-2 3",
      stroke: color
    })]
  });
}));
export { IconWorldBolt };
