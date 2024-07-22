import Link from "next/link";
import { Image } from "@/interface";
import { ImageItem } from "./ImageItem";

interface ImageGridProps {
	images: Image[];
}

export const ImageGrid = ({ images }: ImageGridProps) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{!!images?.length &&
				images.map((image) => (
					<Link key={image.id} href={`/${image.id}`}>
						<ImageItem image={image} />
					</Link>
				))}
		</div>
	);
};

export const ImageGridSkeleton = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
			{Array.from({ length: 12 }).map((_item, i) => (
				<div
					className="animate-pulse w-full h-[18.75rem] bg-slate-200 rounded-lg"
					key={i}
				></div>
			))}
		</div>
	);
};
