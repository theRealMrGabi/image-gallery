import { _axios } from "./../axios";
import { Image } from "@/interface";

export const ImageQueryKeys = {
	allImages: "allImages",
	singleImage: "singleImage",
};

export const getAllImagesApi = async ({
	page = 1,
	limit = 20,
}: {
	page?: number;
	limit?: number;
}): Promise<Image[]> => {
	try {
		const path = "/v2/list";
		const params = new URLSearchParams();

		page && params.set("page", page.toString());
		limit && params.set("limit", limit.toString());

		const url = `${path}?${params.toString()}`;
		const response = await _axios.get(url);

		return response as Image[];
	} catch (error) {
		throw error;
	}
};

export const getSingleImageApi = async (imageId: string): Promise<Image> => {
	try {
		const response = await _axios.get(`/id/${imageId}/info`);
		return response as Image;
	} catch (error) {
		throw error;
	}
};
