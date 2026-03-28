import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWorldCancel = themed(memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -8.985 9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.6 15h9.9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.5 3a17 17 0 0 0 0 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.5 3a16.991 16.991 0 0 1 2.53 10.275",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21l4 -4",
      stroke: color
    })]
  });
}));
export { IconWorldCancel };
