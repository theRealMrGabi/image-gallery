interface PaginationProps {
	currentPage: number;
	onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
	return (
		<div className="flex justify-center items-center space-x-4 my-8">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
			>
				Previous
			</button>
			<span>Page {currentPage}</span>
			<button
				onClick={() => onPageChange(currentPage + 1)}
				className="px-4 py-2 bg-blue-500 text-white rounded"
			>
				Next
			</button>
		</div>
	);
};
