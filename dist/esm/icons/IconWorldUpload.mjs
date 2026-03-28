import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWorldUpload = themed(memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -9 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 15h8.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.578 3a17 17 0 0 0 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 3c1.719 2.755 2.5 5.876 2.5 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 21v-7m3 3l-3 -3l-3 3",
      stroke: color
    })]
  });
}));
export { IconWorldUpload };
