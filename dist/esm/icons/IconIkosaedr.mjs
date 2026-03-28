import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconIkosaedr = themed(memo(function (props) {
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
      d: "M21 8.007v7.986a2 2 0 0 1 -1.006 1.735l-7 4.007a2 2 0 0 1 -1.988 0l-7 -4.007a2 2 0 0 1 -1.006 -1.735v-7.986a2 2 0 0 1 1.006 -1.735l7 -4.007a2 2 0 0 1 1.988 0l7 4.007a2 2 0 0 1 1.006 1.735",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3.29 6.97l4.21 2.03",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.71 6.97l-4.21 2.03",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20.7 17h-17.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.76 2.03l-4.26 6.97l-4.3 7.84",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.24 2.03q 2.797 4.44 4.26 6.97t 4.3 7.84",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17l-4.5 -8h9l-4.5 8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 17v5",
      stroke: color
    })]
  });
}));
export { IconIkosaedr };
