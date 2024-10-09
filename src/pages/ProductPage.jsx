import React from 'react';
import { Skeleton, Space, Table, Image, Button, Popconfirm, message } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// "name": "Sản phẩm 2",
// "imageUrl": "https://picsum.photos/500/500",
// "price": 300,
// "available": true,
// "type": "type1",
// "category": "idCategory2",
// "description": "123131",
// "id": 3
const ProductPage = () => {

    const queryClient = useQueryClient();

    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(` http://localhost:3000/products`);
            return response.data.map((product) => ({
                key: product.id,
                ...product,
            }))
        }
    })


    const { mutate } = useMutation({
        mutationFn: async (id) => {
            return await axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            messageApi.success("Xóa sản phẩm thành công");
            queryClient.invalidateQueries({
                queryKey: ["products"],

            });
        },
        onError: (error) => {
            messageApi.error("Xóa sản phẩm không thành công", error.message);
        },
    });
    const onHandleRemove = (id) => {
        mutate(id);
    };





    const columns = [
        {
            title: 'Ảnh',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: (_, item) => {
                return <Image width={50} src={item.imageUrl} />
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
            key: 'price',
            dataIndex: 'price',

        },
        {
            title: 'Tình trạng',
            key: 'available',
            dataIndex: 'available',
            render: (_, item) => {
                return <span >{item.available ? 'Còn hàng' : 'Hết hàng'}</span>
            }

        },
        {
            title: 'Loại hàng',
            key: 'type',
            dataIndex: 'type',
            render: (_, item) => {
                return <span >{item.type === "type1" ? 'Hàng đã qua sử dụng' : 'Hàng mới'}</span>
            }

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item) => {
                return <div className='w-20'>
                    <Space width='150'>
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn có chắc chắn muốn xóa sản phẩm này không?"
                            onConfirm={() => onHandleRemove(item.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button variant="solid" color="danger">
                                Xóa
                            </Button>
                        </Popconfirm>

                        <Button variant='solid' color='info'>Cập nhật</Button>
                    </Space>
                </div>
            }

        },
    ];
    return (

        <>
            {contextHolder}
            <h1 className='text-3xl mb-5'>Quản lý sản phẩm</h1>
            <Skeleton active loading={isLoading}>
                <Table columns={columns} dataSource={data} />
            </Skeleton>
        </>
    )
}

export default ProductPage;