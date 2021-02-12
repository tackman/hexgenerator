import React, { ReactElement } from "react";
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

import { HexVertexUp, HexVertexDown } from "./HexVertex";

type Props = {
  spriteWidth: number;
  spriteHeight: number;
  texture: Texture;
  vertexTexture: Texture;
  stageWidth: number;
  stageHeight: number;
};

export function HexTiles(props: Props) {
  const hexHeight = 2 * props.spriteWidth + props.spriteHeight;
  const rowsCount = Math.ceil(props.stageHeight / hexHeight);

  const edgeRows: Array<ReactElement> = [];

  for (let i = 0; i < rowsCount; ++i) {
    const row = (
      <Container>
        <UpperRightEdgeRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.texture}
        />
        <UpperLeftEdgeRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.texture}
        />
        <BottomRightEdgeRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.texture}
        />
        <BottomLeftEdgeRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.texture}
        />
        <VerticalLeftEdgeRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.texture}
        />

        <UpperVertexRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.vertexTexture}
        />

        <LowerVertexRow
          stageWidth={props.stageWidth}
          spriteHeight={props.spriteHeight}
          spriteWidth={props.spriteWidth}
          line={i}
          texture={props.vertexTexture}
        />
      </Container>
    );

    edgeRows.push(row);
  }

  return <Container>{edgeRows}</Container>;
}

type VrowProps = {
  stageWidth: number;
  spriteHeight: number;
  spriteWidth: number;
  line: number;
  texture: Texture;
};

function UpperVertexRow(props: VrowProps) {
  const yHigh =
    props.line *
      (3 * props.spriteWidth + (2 * Math.sqrt(3) * props.spriteHeight) / 2) +
    props.spriteHeight / 2;
  const yLow =
    0.5 * props.spriteWidth +
    props.spriteHeight / 2 +
    props.line *
      (3 * props.spriteWidth + (2 * Math.sqrt(3) * props.spriteHeight) / 2);
  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const vertCount = Math.floor((2 * props.stageWidth) / hexWidth) + 1;

  const ary = [];
  for (let i = 0; i < vertCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = (hexWidth * n) / 2 + props.spriteHeight / 2;
    const y = n % 2 === 1 ? yHigh : yLow;
    return n % 2 === 1 ? (
      <HexVertexDown
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteHeight}
        height={props.spriteHeight}
      />
    ) : (
      <HexVertexUp
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteHeight}
        height={props.spriteHeight}
      />
    );
  });

  return <Container>{edges}</Container>;
}

function LowerVertexRow(props: VrowProps) {
  const yHigh =
    1.5 * props.spriteWidth +
    (1.5 * props.spriteHeight * Math.sqrt(3)) / 2 +
    props.line *
      (3 * props.spriteWidth + (2 * Math.sqrt(3) * props.spriteHeight) / 2);
  const yLow =
    2 * props.spriteWidth +
    (1.5 * props.spriteHeight * Math.sqrt(3)) / 2 +
    props.line *
      (3 * props.spriteWidth + (2 * Math.sqrt(3) * props.spriteHeight) / 2);
  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;

  const vertCount = Math.floor((2 * props.stageWidth) / hexWidth) + 1;

  const ary = [];
  for (let i = 0; i < vertCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = (hexWidth * n) / 2 + props.spriteHeight / 2;
    const y = n % 2 === 1 ? yLow : yHigh;
    return n % 2 === 1 ? (
      <HexVertexUp
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteHeight}
        height={props.spriteHeight}
      />
    ) : (
      <HexVertexDown
        texture={props.texture}
        y={y}
        x={x}
        width={props.spriteHeight}
        height={props.spriteHeight}
      />
    );
  });

  return <Container>{edges}</Container>;
}

function UpperLeftEdgeRow(props: VrowProps) {
  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;
  const y =
    0.5 * props.spriteWidth +
    props.line * (3 * props.spriteWidth + Math.sqrt(3) * props.spriteHeight) +
    (Math.sqrt(3) * props.spriteHeight) / 2;

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
  const y =
    1.5 * props.spriteWidth +
    props.line * (3 * props.spriteWidth + Math.sqrt(3) * props.spriteHeight) +
    (Math.sqrt(3) * props.spriteHeight) / 2;

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
  const y =
    0.5 * props.spriteWidth +
    props.line * (3 * props.spriteWidth + Math.sqrt(3) * props.spriteHeight) +
    (Math.sqrt(3) * props.spriteHeight) / 2;

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
  const y =
    1.5 * props.spriteWidth +
    props.line * (3 * props.spriteWidth + Math.sqrt(3) * props.spriteHeight) +
    (Math.sqrt(3) * props.spriteHeight) / 2;

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
  const y =
    1.5 * props.spriteWidth +
    (Math.sqrt(3) * props.spriteHeight) / 2 +
    props.line *
      (1.5 * props.spriteWidth + (Math.sqrt(3) * props.spriteHeight) / 2);

  const innerHexWidth = Math.sqrt(3) * props.spriteWidth;
  const hexWidth = innerHexWidth + props.spriteHeight;
  const xOffset = (hexWidth / 2) * (props.line % 2);

  const edgeCount = Math.floor((2 * props.stageWidth) / hexWidth);

  const ary = [];
  for (let i = 0; i < edgeCount; ++i) {
    ary.push(i);
  }

  const edges = ary.map((n) => {
    const x = hexWidth * n + xOffset;
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
