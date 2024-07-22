import type { ToasterProps } from "react-hot-toast";

export const toasterProps: ToasterProps = {
	position: "top-right",
	toastOptions: {
		style: {
			fontSize: "0.875rem",
		},
		duration: 4000,
		success: {
			style: {
				backgroundColor: "#DCFCE7",
				color: "#14532D",
			},
		},
		error: {
			duration: 5000,
		},
	},
};
