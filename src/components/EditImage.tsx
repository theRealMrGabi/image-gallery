import { useState } from "react";
import Image from "next/image";
import { Image as ImageType, EditedImage } from "@/interface";

interface EditImageProps {
	image: ImageType;
	editedImage: EditedImage;
	onEditImage: (editedImage: EditedImage) => void;
}

export const EditImage = ({
	image,
	editedImage,
	onEditImage,
}: EditImageProps) => {
	const baseURL = process.env.NEXT_PUBLIC_BASEURL!;

	const { id, width, height, blur, grayscale } = editedImage;

	const basePath = `${baseURL}/id/${id}/${width}/${height}`;

	const params = new URLSearchParams();
	!!grayscale && params.set("grayscale", "");
	blur && params.set("blur", blur.toString());

	const getEditedImageUrl = `${basePath}?${params.toString()}`;

	const [downloading, setDownloading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target;
		onEditImage({
			...editedImage,
			[name]: type === "checkbox" ? checked : parseInt(value, 10),
		});
	};

	const handleDownload = async () => {
		setDownloading(true);
		try {
			const response = await fetch(getEditedImageUrl);
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.style.display = "none";
			a.href = url;
			a.download = `edited-image-${image.id}.jpg`;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Failed to download image:", error);
		}
		setDownloading(false);
	};

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<div className="flex-1">
				<Image
					src={getEditedImageUrl}
					alt={`Edited photo by ${image.author}`}
					width={500}
					height={500}
					className="w-full h-auto object-cover rounded-lg"
				/>
			</div>
			<div className="flex-1">
				<h2 className="text-xl font-semibold mb-4">Edit Options</h2>
				<div className="space-y-4">
					<div>
						<label htmlFor="width" className="block mb-1">
							Width:
						</label>
						<input
							type="number"
							id="width"
							name="width"
							value={editedImage.width}
							onChange={handleInputChange}
							min="1"
							max="1000"
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label htmlFor="height" className="block mb-1">
							Height:
						</label>
						<input
							type="number"
							id="height"
							name="height"
							value={editedImage.height}
							onChange={handleInputChange}
							min="1"
							max="1000"
							className="w-full p-2 border rounded"
						/>
					</div>
					<div>
						<label className="flex items-center">
							<input
								type="checkbox"
								name="grayscale"
								checked={editedImage.grayscale}
								onChange={handleInputChange}
								className="mr-2"
							/>
							Grayscale
						</label>
					</div>
					<div>
						<label htmlFor="blur" className="block mb-1">
							Blur (0-10): {editedImage.blur}
						</label>
						<input
							type="range"
							id="blur"
							name="blur"
							value={editedImage.blur}
							onChange={handleInputChange}
							min="0"
							max="10"
							className="w-full"
						/>
					</div>
					<button
						onClick={handleDownload}
						disabled={downloading}
						className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
					>
						{downloading ? "Downloading..." : "Download Edited Image"}
					</button>
				</div>
			</div>
		</div>
	);
};
