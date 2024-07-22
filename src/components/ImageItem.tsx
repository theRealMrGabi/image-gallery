import Image from "next/image";
import { Image as ImageType } from "@/interface";

interface ImageItemProps {
	image: ImageType;
}

export const ImageItem = ({ image }: ImageItemProps) => {
	return (
		<div className="relative group">
			<Image
				src={image.download_url}
				alt={`Photo by ${image.author}`}
				width={300}
				height={300}
				className="w-full h-auto object-cover rounded-lg"
				sizes="(max-width: 768px) 100vw"
			/>

			<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
				<p className="text-white text-sm">{image.author}</p>
			</div>
		</div>
	);
};
