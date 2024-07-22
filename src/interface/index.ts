export interface Image {
	id: string;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
}

export interface EditedImage {
	id: string;
	width: number;
	height: number;
	grayscale: boolean;
	blur: number;
}
