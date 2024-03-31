import React, { useState } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Headr from "../../components/Headr";
import Add from "./Add";

const Books = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedShopId, setSelectedShopId] = useState();
	const [shopId, setShopId] = useQueryParam("shopId", StringParam);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const onSuccess = () => {
		setSelectedShopId(undefined);
	};

	return (
		<div className="App w-full h-screen pt-5 pl-[100px] pr-[100px]">
			<Headr />

			{/* Middle content and data */}
			<div className="mt-[50px]">
				<div>
					<div className="flex items-center justify-between">
						<span className="flex flex-col gap-2">
							<h1 className="flex items-center gap-1">
								<span className="text-[#fff] font-bold text-[35px]">You've got</span>
								<span className="text-[#6200ee] font-bold text-[35px]">7 books</span>
							</h1>
							<p className="text-[20px] font-normal text-white">Your books today</p>
						</span>
						<span>
							<Button
								onClick={showModal}
								style={{
									backgroundColor: "#6200ee",
									color: "#fff",
									display: "flex",
									placeItems: "center",
								}}
							>
								<PlusOutlined /> Create books
							</Button>
						</span>
					</div>
				</div>
			</div>

			{/* Add modal */}
			
			<Modal
        open={!!shopId}
        className="p-0"
        footer={null}
        closeIcon={false}
        onCancel={() => setShopId(undefined)}
      >
        {shopId === "new" ? <Add onSuccess={onSuccess} /> : ""}
      </Modal>
		</div>
	);
};

export default Books;
