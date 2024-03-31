import React, { useRef } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { registerUser } from "../../modules/auth/api";

const Login1 = () => {
	const formRef = useRef();

	const onFinish = async () => {
		try {
			const values = await formRef.current.validateFields(); // Get form values
			console.log("Email:", values.email);
			console.log("Password:", values.secret);

			const { data } = await registerUser(values); // Pass values to registerUser function
			localStorage.setItem("userData", JSON.stringify(data));
		} catch (err) {
			console.error("Login error:", err);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="grid h-screen place-items-center">
			<div className="bijirlog w-[400px] grid place-items-center">
				<h1 className="text-[25px] font-bold">Login Form</h1>
				<Form
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					ref={formRef}
					className="flex w-[300px] flex-col gap-3"
				>
					<Form.Item
						className="m-0"
						name="email"
						rules={[{ required: true, message: "Please input your email!" }]}
					>
						<Input size="large" placeholder="email" />
					</Form.Item>
					<Form.Item
						className="m-0"
						name="secret"
						rules={[{ required: true, message: "Please input your secret!" }]}
					>
						<Input.Password size="large" placeholder="secret" />
					</Form.Item>
					<Button size="large"
						style={{ backgroundColor: "#6200ee", borderColor: "#6200ee", color: "#fff" }}
					 type="primary" htmlType="submit">
						Login
					</Button>
				</Form>

				<p className="text-[14px] font-normal flex items-center gap-1">
					Already signed up? Go to sign up.{" "}
					<Link to="/register" className="w-max self-end">
						<p className="text-blue-500">Go to sign up.</p>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login1;
