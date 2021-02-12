import React from "react";
import { Sprite } from "@inlet/react-pixi";
import { Texture } from "pixi.js";

export const Angles = {
  VerticalRight: Math.PI / 2,
  BottomRight: -Math.PI / 6,
  BottomLeft: Math.PI / 6,
  VerticalLeft: (3 * Math.PI) / 2,
  UpperLeft: -Math.PI / 6,
  UpperRight: Math.PI / 6,
};

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  texture: Texture;
  angle: number;
};

export function HexEdge(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={props.angle}
      anchor={0}
    />
  );
}

export function HexEdgeUpperLeft(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.UpperLeft}
      anchor={{ x: 0, y: 1 }}
    />
  );
}

export function HexEdgeUpperRight(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.UpperRight}
      anchor={{ x: 1, y: 1 }}
    />
  );
}

export function HexEdgeVerticalRight(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.VerticalRight}
      anchor={{ x: 0, y: 1 }}
    />
  );
}

export function HexEdgeVerticalLeft(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.VerticalLeft}
      anchor={{ x: 0, y: 0 }}
    />
  );
}

export function HexEdgeHorizontal(props: Props) {
  return (
    <Sprite
      width={props.width * Math.SQRT2}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={0}
      anchor={0}
    />
  );
}

export function HexEdgeBottomRight(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.BottomRight}
      anchor={{ x: 1, y: 0 }}
    />
  );
}

export function HexEdgeBottomLeft(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.BottomLeft}
      anchor={{ x: 0, y: 0 }}
    />
  );
}
