import { Col, Row, Image } from "react-bootstrap";
import CommonBreadcrumb from "./common-pages/_breadcrumb";
import { MdLocationCity } from "react-icons/md";
import { useEffect, useState } from "react";
import siteLogo from "../assets/images/logo.png";
import { Button, Form, Input } from "antd";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { IoMdPhonePortrait } from "react-icons/io";

// u - info@tcahindustan.in
// p - tcahindustan@123

// email js account

function ContactScreen() {

    // const [contactForm] = Form.useForm();
    // const [loadingForm, setLoadingForm] = useState(false);

    // const sendEmail = async () => {
    //     // e.preventDefault();

    //     const serviceId = 'service_ob6pq0x';
    //     const templateId = 'template_51k9e27';
    //     const publicKey = 'oFtsJaGP53WjeTrt7';

    //     const data = {
    //         service_id: serviceId,
    //         template_id: templateId,
    //         user_id: publicKey,
    //         template_params: {
    //             from_name: contactForm.getFieldValue('user_name'),
    //             from_email: contactForm.getFieldValue('user_email'),
    //             user_phone: contactForm.getFieldValue('user_phone'),
    //             to_name: 'TCA Hindustan',
    //             message: contactForm.getFieldValue('message')
    //         }
    //     }

    //     try {
    //         setLoadingForm(true);
    //         const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
    //         console.log(res);
    //         alert('Your mail is sent!');
    //         contactForm.resetFields();
    //     } catch (error) {
    //         console.error(error);
    //         setLoadingForm(false);
    //     } finally {
    //         setLoadingForm(false);
    //     }
    // };

    // const alphanumericSpaceMinusSlashPeriod = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     // console.log(e);
    //     const re = /^[A-Za-z0-9 /\-\.]$/g;
    //     if (!re.test(e.key) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
    //         e.preventDefault();
    //     }
    // }

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);
    return (
        <>
            <CommonBreadcrumb title={"Contact Us"} />
            <Col className="contact-section" xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12}>
                <Row>
                    <Col xl={12} lg={12} md={12} className="d-flex flex-column justify-content-top bg-color-custom">
                        <div className="contact-bg">
                            <Col xl={12} className="text-center">
                                <Image src={siteLogo} className="img-fluid mb-4" width={250} alt="Logo" />
                            </Col>
                            <div className="col-12 ps-2 pe-2">
                                <h5>Get in Touch With Us</h5>
                                <p>24*7 Support</p>
                                <hr />
                            </div>
                            <Col xl={{ span: 8, offset: 2 }} lg={12}>
                                {/* <Form
                                    form={contactForm}
                                    onFinish={sendEmail}
                                    name="contact-form"
                                    layout="vertical"
                                >
                                    {/* <form role={form} onSubmit={} id="contact-form">
                                    <label>Name</label>
                                    <input type="text" name="user_name" />
                                    <label>Email</label>
                                    <input type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input type="submit" value="Send" />
                                </form> *
                                    <Form.Item
                                        name="user_name"
                                        label="Full Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your Full Name',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<AiOutlineUser />} placeholder="Enter Full Name" />
                                    </Form.Item>
                                    <Form.Item
                                        name="user_email"
                                        label="E-mail ID"
                                        rules={[
                                            {
                                                type: 'email',
                                                required: true,
                                                message: 'Please enter your E-mail ID',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<MdAlternateEmail />} placeholder="Enter e-Mail ID" />
                                    </Form.Item>
                                    <Form.Item name="user_phone" label="Phone No." rules={[
                                        { required: true, message: 'Please enter Phone Number!' }
                                    ]}>
                                        <Input prefix={<IoMdPhonePortrait />} maxLength={20} className="w-100" placeholder="Phone No."
                                            onKeyDown={(e) => { alphanumericSpaceMinusSlashPeriod(e) }}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Message"
                                        name="message"
                                        rules={[
                                            { required: true, message: 'Please enter Message in the text area!' },
                                            { max: 500, message: 'Message must not exceed 500 characters!' },
                                        ]}
                                    >
                                        <Input.TextArea placeholder="Enter Message" rows={5} style={{ width: '100%' }}
                                            showCount
                                            maxLength={500} // Set the maximum length of the input
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" loading={loadingForm}>
                                            Send Message
                                        </Button>
                                    </Form.Item>
                                </Form> */}
                            </Col>
                        </div>
                    </Col>
                </Row >
            </Col >
        </>
    );
}

export default ContactScreen;