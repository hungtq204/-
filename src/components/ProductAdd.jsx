import { Button, Checkbox, Form, Input, InputNumber, Radio, Select } from 'antd'
import React from 'react'

const ProductAdd = () => {
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <>


            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >

                <Form.Item
                    label="Tên"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Phải nhập',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="giá"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Phải nhập',
                        },
                        {
                            min: 0,
                            type: 'number',

                            message: 'Nhập lớn hơn 0!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item label="Tình trạng" name="available" valuePropName="checked">
                    <Checkbox></Checkbox>
                </Form.Item>

                < Form.Item label="Danh mục" name="category">
                    <Select>
                        <Select.Option value="1">Danh mục 1</Select.Option>
                        <Select.Option value="2">Danh mục 2</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    )
}


export default ProductAdd