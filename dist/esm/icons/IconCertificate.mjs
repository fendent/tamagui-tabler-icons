import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCertificate = themed(memo(function (props) {
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
      d: "M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 17.5v4.5l2 -1.5l2 1.5v-4.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 9l12 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12l3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 15l2 0",
      stroke: color
    })]
  });
}));
export { IconCertificate };
