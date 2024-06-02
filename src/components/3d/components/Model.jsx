import React, { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
	const [urlModel, setUrlModelo] = useState("/models/animales1.glb");

	useEffect(() => {
		console.log("Cambio al modelo...", props.selectedModelo.model);
		setUrlModelo(props.selectedModelo.model);
	}, [props]);

	useEffect(() => {
		setUrlModelo(props.selectedModelo.model);
	}, [props.selectedModelo]);

	const gltf = useLoader(GLTFLoader, urlModel);

	return <primitive object={gltf.scene} {...props} />;
};

export default Model;
