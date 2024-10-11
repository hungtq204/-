import React from 'react';
import { Button, Space, Table, Image, Skeleton, Popconfirm, message } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const ProductPage = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage()
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/products`);
            return res.data.map((product) => ({
                key: product.id,
                ...product,
            }))
        }
    });

    const mutatio = useMutation({
        mutationFn: async (id) => {

            return await axios.delete(`http://localhost:3000/products/${id}`)
        },
        onSuccess: () => {
            messageApi.success("Xoa san pham ok")
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: () => {
            messageApi.error("that bai", message.error)
        }
    });
    const onhandleremove = (id) => {
        mutatio.mutate(id)
    }



    // "name": "Sản phẩm 3",
    // "imageUrl": "https://picsum.photos/500/500",
    // "price": 300,
    // "available": false,
    // "type": "type1",
    // "category": "3",
    // "description": "123131",
    // "id": 10
    const columns = [
        {
            title: 'Ảnh sản phẩm',
            dataIndex: 'imageUrl',
            key: 'imagUrl',
            render: (_, item) => {
                return (
                    <Image width={50} src={item.imageUrl}></Image>
                )
            }
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'available',
            key: 'available',
            render: (_, item) => {
                return (
                    <span>{item.available ? "Còn Hàng" : "Hết hàng"}</span>
                )
            }

        },
        {
            title: 'Loại hàng',
            dataIndex: 'type',
            key: 'type',
            render: (_, item) => {
                return (
                    <span>{item.type === "type1" ? "Hàng mới" : "hàng cũ"}</span>
                )
            }
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, item) => {
                return (
                    <div className='w-20'>
                        <Space width={50}>
                            <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this task?"
                                onConfirm={() => onhandleremove(item.id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button variant='solid' color='danger'>Xóa </Button>
                            </Popconfirm>

                            <Button variant='solid' color='info'>Cập nhật </Button>
                        </Space>
                    </div>
                )

            }
        },
    ];


    return (
        <>
            <h1 className='text-3xl mb-5'>Quản lý hàng hóa</h1>
            <Skeleton active loading={isLoading}>
                <Table columns={columns} dataSource={data} />;
            </Skeleton>
        </>
    )
}


export default ProductPage;