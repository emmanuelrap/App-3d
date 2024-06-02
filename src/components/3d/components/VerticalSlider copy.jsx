import React, { useEffect, useState } from "react";
import { Avatar, Box, List, ListItem } from "@mui/material";

const modelos = [
	{ id: 1, categoria: "Construcciones", model: "/models/construccion1.glb", image: "/avatars/construccion1.PNG" },
	{ id: 2, categoria: "Construcciones", model: "/models/construccion2.glb", image: "/avatars/construccion2.PNG" },
	{ id: 3, categoria: "Construcciones", model: "/models/construccion3.glb", image: "/avatars/construccion3.PNG" },
	{ id: 4, categoria: "Construcciones", model: "/models/construccion4.glb", image: "/avatars/construccion4.PNG" },
	{ id: 5, categoria: "Animales", model: "/models/animales1.glb", image: "/avatars/animales1.PNG" },
	{ id: 6, categoria: "Animales", model: "/models/animales2.glb", image: "/avatars/animales2.PNG" },
	{ id: 7, categoria: "Autos", model: "/models/autos1.glb", image: "/avatars/autos1.PNG" },
	{ id: 8, categoria: "Autos", model: "/models/autos2.glb", image: "/avatars/autos2.PNG" },
	{ id: 9, categoria: "Autos", model: "/models/autos3.glb", image: "/avatars/autos3.PNG" },
	{ id: 10, categoria: "Autos", model: "/models/autos4.glb", image: "/avatars/autos4.PNG" },
	{ id: 11, categoria: "Personas", model: "/models/persona1.glb", image: "/avatars/persona1.PNG" },
	{ id: 12, categoria: "Personas", model: "/models/persona2.glb", image: "/avatars/persona2.PNG" },
	{ id: 13, categoria: "Personas", model: "/models/persona3.glb", image: "/avatars/persona3.PNG" },
	// Añade más objetos según sea necesario
];

const VerticalSlider = ({ selectedModelo, setSelectedModelo, idCategorieSelected }) => {
	const [modelosFiltrados, setModelosFiltrados] = useState([]);

	const handleClickModelo = (model) => {
		setSelectedModelo(model.id);
	};

	useEffect(() => {
		const botones = modelos.filter((modelo) => modelo.categoria === idCategorieSelected);
		console.log("botones", botones);
		setModelosFiltrados(botones);
	}, [idCategorieSelected]);

	return (
		<Box sx={{ overflowY: "auto", width: { xs: "100%", sm: "auto" }, height: { xs: "auto", sm: "100%" } }}>
			<List>
				{modelosFiltrados.map((model) => (
					<ListItem key={model.id} button onClick={() => handleClickModelo(model)} selected={selectedModelo === model.id}>
						<Avatar alt={`Avatar ${model.id}`} src={model.image} />
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default VerticalSlider;
