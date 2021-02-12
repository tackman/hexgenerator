import React, { useState } from "react";
import "./App.css";
import { Stage, Sprite } from "@inlet/react-pixi";
import * as UPNG from "upng-js";
import { Texture } from "pixi.js";
import { HexEdge, Angles } from "./components/HexEdge";
import { HexTiles } from "./components/HexTiles";

const App = () => {
  const [edgeTexture, setEdgeTexture] = useState<Texture>(
    Texture.from("./edge-sample.png")
  );

  const [vertextTexture, setVertexTexture] = useState<Texture>(
    Texture.from("./vert-sample.png")
  );

  const [stageWidth, setStageWidth] = useState<number>(1200);
  const [stageHeihgt, setStageHeight] = useState<number>(800);

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
          //        setVertexTexture(texture)
        }
      });
    }
  };

  return (
    <div>
      <input id="input-edge-texture" type="file" onChange={loadTextureImage} />
      <input
        id="input-vertex-texture"
        type="file"
        onChange={loadTextureImage}
      />
      <Stage width={stageWidth} height={stageHeihgt}>
        <HexTiles
          spriteHeight={20}
          spriteWidth={100}
          texture={edgeTexture}
          vertexTexture={vertextTexture}
          stageWidth={stageWidth}
          stageHeight={stageHeihgt}
        />
      </Stage>
    </div>
  );
};

export default App;
