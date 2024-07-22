import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const apiService = () => {
	const baseURL = process.env.NEXT_PUBLIC_BASEURL!;

	const axiosService = axios.create({
		baseURL: `${baseURL}`,
		withCredentials: false,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	});

	axiosService.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => config
	);

	axiosService.interceptors.response.use(
		(response: AxiosResponse) => response,
		(error: AxiosError) => {
			if (error?.response === undefined)
				toast.error("Unable to connect to internet");
			else {
				const errorData = error?.response?.data as Record<
					string,
					string | object
				>;

				const errorMessage = (errorData?.message ||
					errorData.error ||
					"Something went wrong") as string;

				if (errorMessage) {
					toast.error(errorMessage);
				}

				return Promise.reject(errorData);
			}
		}
	);

	interface IPostProps {
		url: string;
		payload?: object;
	}

	return {
		get: async (url: string) => {
			try {
				const data = axiosService.get(url);
				const resolvedData = await Promise.resolve(data);
				return resolvedData?.data;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		post: async ({ url, payload }: IPostProps) => {
			try {
				const data = axiosService.post(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData?.data;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		patch: async ({ url, payload }: IPostProps) => {
			try {
				const data = axiosService.patch(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData?.data;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		delete: async ({ url, payload }: IPostProps) => {
			try {
				const data = axiosService.delete(url, { data: payload });
				const resolvedData = await Promise.resolve(data);
				return resolvedData?.data;
			} catch (error) {
				return Promise.reject(error);
			}
		},

		put: async ({ url, payload }: IPostProps) => {
			try {
				const data = axiosService.put(url, payload);
				const resolvedData = await Promise.resolve(data);
				return resolvedData?.data;
			} catch (error) {
				return Promise.reject(error);
			}
		},
	};
};

export const _axios = apiService();
