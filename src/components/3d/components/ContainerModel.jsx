import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const ContainerModel = ({ selectedModelo, idCategorieSelected }) => {
	useEffect(() => {
		console.log("selectedModeloselectedModeloselectedModelo", selectedModelo);
	}, [selectedModelo]);

	return (
		<div style={{ height: "100%", width: "100%" }}>
			<Canvas style={{ height: "100%", width: "100%" }}>
				<ambientLight intensity={1} />
				<directionalLight position={[0, 0, 1]} />
				<Model selectedModelo={selectedModelo} position={[0, 0, 0]} />
				<OrbitControls />
			</Canvas>
		</div>
	);
};

export default ContainerModel;
