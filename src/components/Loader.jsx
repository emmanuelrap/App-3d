import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function SimpleBackdrop({ loading }) {
	const [open, setOpen] = React.useState(true);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	React.useEffect(() => {
		if (loading) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [loading]);

	return (
		<div>
			<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</div>
	);
}
