import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTimeDuration15 = themed(memo(function (props) {
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
      d: "M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 9v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 4.2v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 19.8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7.5 19.8v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.2 16.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.8 16.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.2 7.5v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 12a9 9 0 0 0 -9 -9",
      stroke: color
    })]
  });
}));
export { IconTimeDuration15 };
