import React, { useState } from "react";
import { Input, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import img from "../../img/profile_photo.png";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="App w-full h-screen pt-5 pl-[100px] pr-[100px]">
			<header>
				<div className="flex items-center justify-between flex-wrap">
					{/* chap */}
					<span className="flex items-center w-[500px] justify-between gap-2">
						<span className="flex items-center gap-2">
							<svg
								width="36"
								height="26"
								viewBox="0 0 36 26"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23.2965 9.8285C23.4012 9.933 23.4843 10.0571 23.5411 10.1938C23.5978 10.3305 23.627 10.477 23.627 10.625C23.627 10.773 23.5978 10.9195 23.5411 11.0562C23.4843 11.1928 23.4012 11.317 23.2965 11.4215L16.5465 18.1715C16.442 18.2763 16.3178 18.3594 16.1811 18.4161C16.0445 18.4728 15.8979 18.502 15.75 18.502C15.602 18.502 15.4555 18.4728 15.3188 18.4161C15.1821 18.3594 15.058 18.2763 14.9535 18.1715L11.5785 14.7965C11.4739 14.6919 11.3909 14.5677 11.3343 14.4311C11.2777 14.2944 11.2485 14.1479 11.2485 14C11.2485 13.8521 11.2777 13.7056 11.3343 13.5689C11.3909 13.4323 11.4739 13.3081 11.5785 13.2035C11.6831 13.0989 11.8072 13.0159 11.9439 12.9593C12.0806 12.9027 12.227 12.8736 12.375 12.8736C12.5229 12.8736 12.6694 12.9027 12.806 12.9593C12.9427 13.0159 13.0669 13.0989 13.1715 13.2035L15.75 15.7842L21.7035 9.8285C21.808 9.72373 21.9321 9.64061 22.0688 9.58389C22.2055 9.52718 22.352 9.49799 22.5 9.49799C22.6479 9.49799 22.7945 9.52718 22.9311 9.58389C23.0678 9.64061 23.192 9.72373 23.2965 9.8285Z"
									fill="white"
								/>
							</svg>
							<span className="flex items-center gap-1">
								<p className="text-[#6200EE] text-[18px] font-bold">Books</p>
								<p className="text-[#fff] text-[18px] font-bold">List</p>
							</span>
						</span>
						{/* qidiruv */}
						<span>
							<div className="flex items-center gap-2 a">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
										stroke="#FEFEFE"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<Input
									style={{ border: "none", background: "none", color: "#fff" }}
									type="text"
									placeholder="Search for any training you want"
									className="custom-input w-[250px]"
								/>
							</div>
						</span>
					</span>

					{/* ong */}
					<span>
						<span className="flex items-center gap-2">
							<svg
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* SVG path code */}
							</svg>
							<img className="w-[35px]" src={img} alt="" />
						</span>
					</span>
				</div>
			</header>

			{/* orta va datalar */}
			<div className="mt-[50px]">
				<div>
					<div className="flex items-center justify-between">
						<span className="flex flex-col gap-2">
							<h1 className="flex items-center gap-1">
								<span className="text-[#fff] font-bold text-[35px]">You've got</span>
								<span className="text-[#6200ee] font-bold text-[35px]">7 book</span>
							</h1>
							<p className="text-[20px] font-normal text-white">You books today</p>
						</span>
						<span>
							<Button
								onClick={showModal}
								style={{ backgroundColor: "#6200ee",color: "#fff",display:"flex",placeItems:"center", }}
							>
								<PlusOutlined /> Create books
							</Button>
						</span>
					</div>
				</div>
			</div>

			<Modal title="Basic Modal" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
}

export default App;
