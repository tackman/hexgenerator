import React, { useState } from "react";
import "./App.css";
import { Stage } from "@inlet/react-pixi";
import * as UPNG from "upng-js";
import { Texture } from "pixi.js";
import { HexTiles } from "./components/HexTiles";

const App = () => {
  const [edgeTexture, setEdgeTexture] = useState<Texture>(
    Texture.from("./edge-sample.png")
  );

  const [vertextTexture, setVertexTexture] = useState<Texture>(
    Texture.from("./vert-sample.png")
  );

  const [bodyTexture, setBodyTexture] = useState<Texture>(
    Texture.from("./tile-sample.png")
  );

  const [stageWidth, setStageWidth] = useState<number>(1200);
  const [stageHeihgt, setStageHeight] = useState<number>(1800);

  const loadTextureImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event.target.files ? event.target.files[0] : null;
    if (f) {
      f.arrayBuffer().then((buf) => {
        const img = UPNG.decode(buf);
        const rgba = UPNG.toRGBA8(img)[0];
        const texture = Texture.fromBuffer(
          new Uint8Array(rgba),
          img.width,
          img.height,
          {}
        );

        if (event.target.id === "input-edge-texture") {
          setEdgeTexture(texture);
        } else if (event.target.id === "input-vertex-texture") {
          setVertexTexture(texture);
        } else if (event.target.id === "input-body-texture") {
          setBodyTexture(texture);
        }
      });
    }
  };

  return (
    <div>
      <label>Edge texture</label>
      <input id="input-edge-texture" type="file" onChange={loadTextureImage} />
      <label>Vertex texture</label>
      <input
        id="input-vertex-texture"
        type="file"
        onChange={loadTextureImage}
      />
      <label>Tile texture</label>
      <input id="input-body-texture" type="file" onChange={loadTextureImage} />

      <label>width</label>
      <input
        id="input-stage-width"
        type="number"
        value={stageWidth}
        onChange={(e) => {
          setStageWidth(Number.parseInt(e.target.value));
        }}
      />

      <label>height</label>
      <input
        id="input-stage-width"
        type="number"
        value={stageHeihgt}
        onChange={(e) => {
          setStageHeight(Number.parseInt(e.target.value));
        }}
      />
      <Stage width={stageWidth} height={stageHeihgt}>
        <HexTiles
          spriteHeight={20}
          spriteWidth={100}
          texture={edgeTexture}
          vertexTexture={vertextTexture}
          stageWidth={stageWidth}
          stageHeight={stageHeihgt}
          bodyTexture={bodyTexture}
        />
      </Stage>
    </div>
  );
};

export default App;
