import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
}

const onFinish : FormProps<FieldType>['onFinish'] = (values) => {
    console.log('success',values);   
}

const onFinishFailed : FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed',errorInfo);
    
}




const Forms:React.FC = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center bg-gray-300'>
        <Form
        name='basic'
        labelCol={{span : 8}}
        wrapperCol={{span : 16}}
        style={{maxWidth : 600}}
        initialValues={{remember : true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        className='w-full'
        >
            <Form.Item <FieldType>
                label = "Username"
                name = "username"
                rules={[{required : true,message : 'Please input your username !'}]}
                >
                <Input/>
            </Form.Item>
            <Form.Item <FieldType>
                label = "Password"
                name = "password"
                rules={[{required : true,message : 'Please input your Password !'}]}
                >
                <Input.Password/>
            </Form.Item>
            <Form.Item <FieldType> 
                name = 'remember'
                valuePropName='checked'
                wrapperCol={{offset : 8,span : 16}}
            >
                <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Forms