import React from "react";
import { Sprite } from "@inlet/react-pixi";
import { Texture } from "pixi.js";

export const Angles = {
  Up: 0,
  Down: Math.PI,
};

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  texture: Texture;
};

export function HexVertexUp(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.Up}
      anchor={0.5}
    ></Sprite>
  );
}

export function HexVertexDown(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      rotation={Angles.Down}
      anchor={0.5}
    ></Sprite>
  );
}
