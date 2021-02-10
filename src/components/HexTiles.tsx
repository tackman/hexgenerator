import React from "react";
import { Container } from "@inlet/react-pixi";
import { Texture } from "pixi.js";
import {
  Angles,
  HexEdgeUpperLeft,
  HexEdgeUpperRight,
  HexEdgeVerticalLeft,
  HexEdgeBottomLeft,
  HexEdgeBottomRight,
} from "./HexEdge";

type Props = {
  spriteWidth: number;
  spriteHeight: number;
  texture: Texture;
  stageWidth: number;
  stageHeight: number;
};

export function HexTiles(props: Props) {
  return (
    <Container>
      <UpperRightEdgeRow
        stageWidth={props.stageWidth}
        spriteHeight={props.spriteHeight}
        spriteWidth={props.spriteWidth}
        line={1}
        texture={props.texture}
      />
      <UpperLeftEdgeRow
        stageWidth={props.stageWidth}
        spriteHeight={props.spriteHeight}
        spriteWidth={props.spriteWidth}
        line={1}
        texture={props.texture}
      />
      <VerticalLeftEdgeRow
        stageWidth={props.stageWidth}
        spriteHeight={props.spriteHeight}
        spriteWidth={props.spriteWidth}
        line={1}
        texture={props.texture}
      />
      <BottomRightEdgeRow
        stageWidth={props.stageWidth}
        spriteHeight={props.spriteHeight}
        spriteWidth={props.spriteWidth}
        line={1}
        texture={props.texture}
      />
      <BottomLeftEdgeRow
        stageWidth={props.stageWidth}
        spriteHeight={props.spriteHeight}
        spriteWidth={props.spriteWidth}
        line={1}
        texture={props.texture}
      />
    </Container>
  );
}

type VrowProps = {
  stageWidth: number;
  spriteHeight: number;
  spriteWidth: number;
  line: number;
  texture: Texture;
};

function UpperLeftEdgeRow(props: VrowProps) {
  const y = (0.25 + 1.5 * props.line) * props.spriteWidth;

  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const edgeCount = Math.floor((2 * props.stageWidth) / hexWidth);

  const ary = [];
  for (let i = 0; i < edgeCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = hexWidth * n + props.spriteHeight;
    return (
      <HexEdgeUpperLeft
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteWidth}
        height={props.spriteHeight}
        angle={Angles.UpperRight}
      />
    );
  });

  return <Container>{edges}</Container>;
}

function BottomLeftEdgeRow(props: VrowProps) {
  const y = (1.25 + 1.5 * props.line) * props.spriteWidth;

  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const edgeCount = Math.floor((2 * props.stageWidth) / hexWidth);

  const ary = [];
  for (let i = 0; i < edgeCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = hexWidth * n + props.spriteHeight;
    return (
      <HexEdgeBottomLeft
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteWidth}
        height={props.spriteHeight}
        angle={Angles.UpperRight}
      />
    );
  });

  return <Container>{edges}</Container>;
}

function UpperRightEdgeRow(props: VrowProps) {
  const y = (0.25 + 1.5 * props.line) * props.spriteWidth;

  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const edgeCount = Math.floor(props.stageWidth / hexWidth);

  const ary = [];
  for (let i = 0; i < edgeCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = hexWidth * n + innerHexWidth + props.spriteHeight;
    return (
      <HexEdgeUpperRight
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteWidth}
        height={props.spriteHeight}
        angle={Angles.UpperRight}
      />
    );
  });

  return <Container>{edges}</Container>;
}

function BottomRightEdgeRow(props: VrowProps) {
  const y = (1.25 + 1.5 * props.line) * props.spriteWidth;

  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const edgeCount = Math.floor(props.stageWidth / hexWidth);

  const ary = [];
  for (let i = 0; i < edgeCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = hexWidth * n + innerHexWidth + props.spriteHeight;
    return (
      <HexEdgeBottomRight
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteWidth}
        height={props.spriteHeight}
        angle={Angles.UpperRight}
      />
    );
  });

  return <Container>{edges}</Container>;
}

function VerticalLeftEdgeRow(props: VrowProps) {
  const y = (1.25 + 1.5 * props.line) * props.spriteWidth;

  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const edgeCount = Math.floor(2*props.stageWidth / hexWidth);

  const ary = [];
  for (let i = 0; i < edgeCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = hexWidth * n;
    console.log(n, x, hexWidth);
    return (
      <HexEdgeVerticalLeft
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteWidth}
        height={props.spriteHeight}
        angle={Angles.UpperRight}
      />
    );
  });

  return <Container>{edges}</Container>;
}
