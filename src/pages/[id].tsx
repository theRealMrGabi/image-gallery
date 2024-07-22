import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getSingleImageApi, ImageQueryKeys } from "@/services/api/images.api";
import { EditImage } from "@/components/EditImage";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { EditedImage } from "@/interface";

const EditImageScreen = () => {
	const params = useParams();
	const id = params?.id as string;

	const { isPending, data } = useQuery({
		queryKey: [ImageQueryKeys.singleImage, id],
		queryFn: () => getSingleImageApi(id),
		enabled: !!id,
	});

	const [editedImage, setEditedImage] = useLocalStorage<EditedImage>(
		`editedImage-${id}`,
		{
			id,
			width: 500,
			height: 500,
			grayscale: false,
			blur: 0,
		}
	);

	useEffect(() => {
		const editExists = window.localStorage.getItem(`editedImage-${id}`);

		if (data && !editExists) {
			setEditedImage({
				id,
				width: data?.width || 500,
				height: data?.height || 500,
				grayscale: false,
				blur: 0,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	if (isPending) return <div className="">Loading ....</div>;

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-3xl font-bold my-8">Edit Image</h1>

			{data && (
				<EditImage
					image={data}
					editedImage={editedImage}
					onEditImage={setEditedImage}
				/>
			)}
		</div>
	);
};

export default EditImageScreen;
