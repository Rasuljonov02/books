import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { registerUser } from "../../modules/auth/api";
import { user } from "../../api.js";

const Register1: React.FC = () => {
	const onFinish = async (values) => {
		try {
			const { data } = await registerUser(values);
			message.success(`Successfully registered. Hi ${data.name}`);
			user.data = true;

			localStorage.setItem("userData", JSON.stringify(data));

			// <Navigate to="" />;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="grid h-screen place-items-center">
			<div className="bijir grid place-items-center gap-3">
				<h1 className="text-[25px] font-bold">Register Form</h1>
				<Form onFinish={onFinish} className="flex w-[350px] flex-col gap-3">
					<Form.Item
						className="m-0"
						name="name"
						rules={[{ required: true, message: "Please input your first name!" }]}
					>
						<Input size="large" placeholder="name" />
					</Form.Item>
					<Form.Item
						className="m-0"
						name="email"
						rules={[{ required: true, message: "Please input your email!" }]}
					>
						<Input size="large" placeholder="email" />
					</Form.Item>
					<Form.Item
						className="m-0"
						name="key"
						rules={[{ required: true, message: "Please input your key!" }]}
					>
						<Input size="large" placeholder="key" />
					</Form.Item>
					<Form.Item
						className="m-0"
						name="secret"
						rules={[{ required: true, message: "Please input your secret!" }]}
					>
						<Input.Password size="large" placeholder="secret" />
					</Form.Item>
					<Button
						size="large"
						style={{ backgroundColor: "#6200ee", borderColor: "#6200ee", color: "#fff" }}
						htmlType="submit"
					>
						Submit
					</Button>
				</Form>
				<p className="text-[14px] font-normal flex items-center gap-1">
					Already signed up?{" "}
					<Link to="/login" className="w-max self-end">
						<p className="text-blue-500">Go to sign in.</p>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register1;
