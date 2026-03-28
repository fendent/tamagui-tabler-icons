import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconVirusSearch = themed(memo(function (props) {
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
      d: "M17 12a5 5 0 1 0 -5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 7v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 3h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.536 8.464l2.828 -2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.657 4.929l1.414 1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 21h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.465 15.536l-2.829 2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.343 19.071l-1.413 -1.414",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 12h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 13v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.464 8.464l-2.828 -2.828",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4.929 6.343l1.414 -1.413",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.5 19.5l2.5 2.5",
      stroke: color
    })]
  });
}));
export { IconVirusSearch };
