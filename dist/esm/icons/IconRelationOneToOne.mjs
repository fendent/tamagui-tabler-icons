import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRelationOneToOne = themed(memo(function (props) {
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
      d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 10h1v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 10h1v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 10.5l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 13.5l0 .01",
      stroke: color
    })]
  });
}));
export { IconRelationOneToOne };
