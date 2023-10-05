// import React, { useState } from "react";
// import "./coverimg.css";
// import Model from "./Model";
// import { Canvas } from "react-three-fiber";
// import { useProgress } from "@react-three/fiber";

// const CoverImg = () => {
//   const modelPath = "/model2/scene.gltf"; // Specify the model path here

//   return (
//     <div className="cover-container">
//       <div className="text-container">
//         <h2 className="cover-text"> hi,</h2>
//         <h2 className="cover-text"> I'm Oltean Horatiu</h2>
//         <h2 className="cover-text"> web developer</h2>
//         <h2 className="cover-text"> based in Romania</h2>
//       </div>

//       <div className="model-container">
//         <Canvas>
//           <Model modelPath={modelPath} />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default CoverImg;

// import React, { useState, useEffect } from "react";
// import "./coverimg.css";
// import Model from "./Model";
// import { Canvas } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const CoverImg = () => {
//   const modelPath = "/model2/scene.gltf"; // Specify the model path here
//   const [loading, setLoading] = useState(true); // Initialize loading state

//   useEffect(() => {
//     const loader = new GLTFLoader();
//     loader.load(
//       modelPath,
//       (gltf) => {
//         setLoading(false); // Set loading to false when the model is loaded
//       },
//       undefined,
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       }
//     );
//   }, [modelPath]);

//   return (
//     <div className="cover-container">
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <>
//           <div className="text-container">
//             <h2 className="cover-text"> hi,</h2>
//             <h2 className="cover-text"> I'm Oltean Horatiu</h2>
//             <h2 className="cover-text"> web developer</h2>
//             <h2 className="cover-text"> based in Romania</h2>
//           </div>

//           <div className="model-container">
//             <Canvas>
//               <Model modelPath={modelPath} />
//             </Canvas>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CoverImg;

import React, { useState, useEffect } from "react";
import "./coverimg.css";
import Model from "./Model";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CoverImg = () => {
  const modelPath = "/model2/scene.gltf";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );
  }, [modelPath]);

  return (
    <div className="cover-container">
      <div className="text-container">
        <h2 className="cover-text"> hi,</h2>
        <h2 className="cover-text"> I'm Oltean Horatiu</h2>
        <h2 className="cover-text"> web developer</h2>
        <h2 className="cover-text"> based in Romania</h2>
      </div>

      {loading && (
        <div className="loading-text">
          <h2 className="loading-text">Loading...</h2>
        </div>
      )}

      {!loading && (
        <div className="model-container">
          <Canvas>
            <Model modelPath={modelPath} />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default CoverImg;
