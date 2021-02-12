import React from "react";
import { Sprite } from "@inlet/react-pixi";
import { Texture } from "pixi.js";

type Props = {
  width: number;
  height: number;
  x: number;
  y: number;
  texture: Texture;
};

export function HexBody(props: Props) {
  return (
    <Sprite
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}
      texture={props.texture}
      anchor={0.5}
    ></Sprite>
  );
}
