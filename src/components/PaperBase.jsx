import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigator from "./Navigator"; // Asegúrate de tener este componente correctamente implementado
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PetsIcon from "@mui/icons-material/Pets";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContainerModel from "./3d/components/ContainerModel"; // Asegúrate de tener este componente correctamente implementado
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import { Container, Stack, Typography } from "@mui/material";
import VerticalSlider from "./3d/components/VerticalSlider";

const theme = createTheme({
	palette: {
		primary: {
			light: "#63ccff",
			main: "#E2b753",
			dark: "#006db3",
		},
	},
	typography: {
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: "#081627",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
				contained: {
					boxShadow: "none",
					"&:active": {
						boxShadow: "none",
					},
				},
			},
		},
	},
});

const drawerWidth = 256;

const categories = [
	{
		id: "CATEGORIAS",
		children: [
			{
				id: "Animales",
				icon: <PetsIcon sx={{ color: "white" }} />,
			},
			{
				id: "Construcciones",
				icon: <AccountBalanceIcon sx={{ color: "white" }} />,
			},
			{
				id: "Autos",
				icon: <TimeToLeaveIcon sx={{ color: "white" }} />,
			},
			{
				id: "Personas",
				icon: <EmojiPeopleIcon sx={{ color: "white" }} />,
			},
		],
	},
];

export default function Paperbase() {
	const [idCategorieSelected, setIdCategorieSelected] = React.useState("Personas");
	const [selectedModelo, setSelectedModelo] = React.useState(null);
	const [showMessage, setShowMessage] = React.useState(true);

	const [mobileOpen, setMobileOpen] = React.useState(false);
	const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	React.useEffect(() => {
		setSelectedModelo({ id: 12, categoria: "Personas", model: "/models/persona2.glb", image: "/avatars/persona2.PNG" });
		setIdCategorieSelected("Personas");
	}, []);

	React.useEffect(() => {
		setShowMessage(true);
		const timer = setTimeout(() => {
			setShowMessage(false);
		}, 5000);

		return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta o `selectedModelo` cambia
	}, [selectedModelo]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ display: "flex", height: "100vh" }}>
				<AppBar position='fixed' sx={{ display: { sm: "none" } }}>
					<Toolbar>
						<IconButton color='inherit' edge='start' onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
					<Drawer
						variant={isSmUp ? "permanent" : "temporary"}
						open={isSmUp || mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							"& .MuiDrawer-paper": {
								width: drawerWidth,
							},
						}}
					>
						<Navigator categories={categories} setIdCategorieSelected={setIdCategorieSelected} />
					</Drawer>
				</Box>
				{/* CONTENEDOR */}
				<Stack
					component='main'
					direction={{ xs: "column", sm: "row" }}
					sx={{
						ml: -3,
						mr: -2,
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
						backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
					}}
				>
					{showMessage && (
						<Box sx={{ position: "absolute", top: 0, left: 0, right: 0, p: 2, backgroundColor: "rgba(0,0,0,0.5)", color: "white", textAlign: "center", zIndex: 1200 }}>
							<Typography variant='h6'>Por favor, espere unos segundos...</Typography>
						</Box>
					)}
					<Container sx={{ flexGrow: 1, overflow: "auto", mr: { xs: 0, sm: -12 } }}>
						<ContainerModel selectedModelo={selectedModelo} />
					</Container>
					<Container sx={{ width: { xs: "100%", sm: "auto" } }}>
						<VerticalSlider idCategorieSelected={idCategorieSelected} setSelectedModelo={setSelectedModelo} selectedModelo={selectedModelo} />
					</Container>
				</Stack>
			</Box>
		</ThemeProvider>
	);
}
