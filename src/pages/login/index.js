// import React from "react"
// import { Button, Checkbox, Form, Input } from 'antd';

// const login = () => {

//     const 


//     const onFinish = (values) => {
//         console.log('Success:', values);
//       };
      
//       const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//       };
//     return (
       
          
//             <Form
//               name="basic"
//               labelCol={{
//                 span: 8,
//               }}
//               wrapperCol={{
//                 span: 16,
//               }}
//               style={{
//                 maxWidth: 600,
//               }}
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//             >
//               <Form.Item
//                 label="Username"
//                 name="username"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input your username!',
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
          
//               <Form.Item
//                 label="age"
//                 name="age"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please input your age!',
//                   },
//                 ]}
//               >
//                 <Input/>
//               </Form.Item>
          
              
          
//               <Form.Item
//                 wrapperCol={{
//                   offset: 8,
//                   span: 16,
//                 }}
//               >
//                 <Button  htmlType="submit">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           );
          
//         }

// export default login




'use client'

import { Button, Form, Input, Table   } from 'antd';
import { useState } from 'react';

export default function Home() {

  const [students, setStudents] = useState([]);

  const onFinish = (values) => {
    let stu = students;
    stu.push(values);
    setStudents([...stu]);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Class"
          name="class"
          rules={[
            {
              required: true,
              message: 'Please input your class!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Table className='w-2/4' columns={columns} dataSource={students} />
    </main>
  )
}