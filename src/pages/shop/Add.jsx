import React from "react";
import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { createBooks } from "../../modules/auth/api";

interface AddProps {
	onSuccess?: () => void;
}
const Add: React.FC<AddProps> = ({ onSuccess }) => {
	const [form] = useForm();

	const onFinish = async (values) => {
		try {
			const { data } = await createBooks(values);

			message.success(`Shop ${data.title} added successfully`);

			onSuccess();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1 className="m-0">Add Page</h1>
			<Form form={form} onFinish={onFinish} className="flex flex-col gap-2">
				<Form.Item
					className="m-0"
					name="title"
					rules={[{ required: true, message: "Please input shop title!" }]}
				>
					<Input size="large" placeholder="Title" />
				</Form.Item>
				<Form.Item
					className="m-0"
					name="location"
					rules={[{ required: true, message: "Please input shop location!" }]}
				>
					<Input size="large" placeholder="Location" />
				</Form.Item>
				<Form.Item
					className="m-0"
					name="phone"
					rules={[{ required: true, message: "Please input shop phone!" }]}
				>
					<Input size="large" placeholder="Phone" />
				</Form.Item>
				<Form.Item
					className="m-0"
					name="number"
					rules={[{ required: true, message: "Please input shop number!" }]}
				>
					<Input size="large" placeholder="Number" />
				</Form.Item>

				<Button size="large" type="primary" htmlType="submit">
					Add Shop
				</Button>
			</Form>
		</div>
	);
};

export default Add;
