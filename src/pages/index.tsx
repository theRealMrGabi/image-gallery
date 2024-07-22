import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import { getAllImagesApi, ImageQueryKeys } from "@/services/api/images.api";
import { ImageGrid, ImageGridSkeleton } from "@/components/ImageGrid";
import { Pagination } from "@/components/Pagination";

const Home = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const page = searchParams.get("page");
	const [currentPage, setCurrentPage] = useState(1);

	const { data: images, isPending } = useQuery({
		queryKey: [ImageQueryKeys.allImages, currentPage],
		queryFn: () =>
			getAllImagesApi({
				page: currentPage,
			}),
	});

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		router.push(`/?page=${newPage}`, undefined, {
			shallow: true,
			scroll: true,
		});
	};

	useEffect(() => {
		if (page === null) {
			return setCurrentPage(1);
		}
		setCurrentPage(Number(page));
	}, [page]);

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-3xl font-bold my-8">Image Gallery</h1>

			{isPending && <ImageGridSkeleton />}

			{!isPending && !!images?.length && (
				<>
					<ImageGrid images={images!} />
					<Pagination
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</>
			)}

			{!isPending && !images?.length && <div>No images to display</div>}
		</div>
	);
};

export default Home;
