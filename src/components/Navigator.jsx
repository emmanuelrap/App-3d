import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";

const item = {
	py: "2px",
	px: 3,
	color: "rgba(255, 255, 255, 0.7)",
	"&:hover, &:focus": {
		bgcolor: "rgba(255, 255, 255, 0.08)",
	},
};

const itemCategory = {
	boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
	py: 1.5,
	px: 3,
};

export default function Navigator(props) {
	const { ...other } = props;

	React.useEffect(() => {
		props.setIdCategorieSelected("General");
	}, []);

	const handleClickCategorie = (idCategorie) => {
		props.setIdCategorieSelected(idCategorie);
	};

	return (
		<Drawer variant='permanent' {...other}>
			<List disablePadding>
				<ListItem sx={{ ...item, ...itemCategory, fontSize: 20, color: "#fff", py: -1 }}>ZAMBRANO - 3D APP</ListItem>
				{/* TODO : tablero principal */}
				{/* <ListItem
          onClick={() => props.handleShowMainPage()}
          sx={{ ...item, ...itemCategory, py: 1, cursor: "pointer" }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Tablero Principal</ListItemText>
        </ListItem> */}
				{props.categories?.map(({ id, children }) => (
					<Box key={id} sx={{ bgcolor: "#101F33" }}>
						<ListItem sx={{ pt: 1, pb: 0, px: 3 }}>
							<ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
						</ListItem>
						{children.map(({ id: childId, icon, active }) => (
							<ListItem disablePadding key={childId} onClick={() => handleClickCategorie(childId)}>
								<ListItemButton selected={active} sx={item}>
									<ListItemIcon>{icon}</ListItemIcon>
									<ListItemText>{childId}</ListItemText>
								</ListItemButton>
							</ListItem>
						))}
						<Divider sx={{ mt: 2 }} />
					</Box>
				))}
			</List>
		</Drawer>
	);
}
