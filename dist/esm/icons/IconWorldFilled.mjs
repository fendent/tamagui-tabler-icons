import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWorldFilled = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M21.165 16a10 10 0 0 1 -8.434 5.973a1 1 0 0 0 .617 -.444a18 18 0 0 0 2.28 -5.528z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.372 16a18 18 0 0 0 2.28 5.53a1 1 0 0 0 .616 .443a10 10 0 0 1 -8.433 -5.973z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.57 16a16 16 0 0 1 -1.57 3.884a16 16 0 0 1 -1.57 -3.884"
    }), /* @__PURE__ */jsx(Path, {
      d: "M8.034 10a18 18 0 0 0 0 4h-5.832a10 10 0 0 1 -.002 -4z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.952 10a16 16 0 0 1 0 4h-3.904a16 16 0 0 1 0 -4z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.8 10a10.05 10.05 0 0 1 -.002 4h-5.832c.149 -1.329 .149 -2.67 0 -4z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M11.267 2.027a1 1 0 0 0 -.615 .444a18 18 0 0 0 -2.28 5.529h-5.54a10.01 10.01 0 0 1 8.334 -5.967z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4.116a16 16 0 0 1 1.57 3.885h-3.14c.34 -1.317 .85 -2.6 1.53 -3.817z"
    }), /* @__PURE__ */jsx(Path, {
      d: "M12.733 2.026a10.01 10.01 0 0 1 8.435 5.974h-5.54a18 18 0 0 0 -2.28 -5.53a1 1 0 0 0 -.517 -.414z"
    })]
  });
}));
export { IconWorldFilled };
