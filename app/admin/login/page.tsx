'use client'
import './style.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/components/admin/logo_admin/logo'
import Input from '@/components/admin/input/input'
import Button from '@/components/admin/button/button'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState<boolean | null>(null) // استخدام null كحالة أولية
    const [attemptedLogin, setAttemptedLogin] = useState(false) // حالة لتتبع محاولة تسجيل الدخول

    const loginReq = async () => {
        setAttemptedLogin(true) // تحديث حالة محاولة تسجيل الدخول
        try {
            const url = 'http://localhost:4000/auth/admin/login';
            const data = {
                email: email,
                password: password
            };

            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setStatus(true);
            toast.success('تم تسجيل الدخول بنجاح', {
                position: 'top-center'
            });
        } catch (error) {
            setStatus(false);
            toast.error('فشل تسجيل الدخول. حاول مرة أخرى.', {
                position: 'top-center'
            });
            console.error('Error:', error); // التعامل مع الأخطاء إذا حدثت
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='section section--login'>
                <div className='section__box'>
                    <div className='section__box-login'>
                        <div className='section__box-container'>
                            <Logo />
                            <div className='section__inputs-group'>
                                <Input
                                    label='Email Address'
                                    type='text'
                                    icon='email.svg'
                                    value={email}
                                    onChange={setEmail}
                                />
                                <div className='section__input-password'>
                                    <Input
                                        label='Password'
                                        type='password'
                                        icon='lock.svg'
                                        value={password}
                                        onChange={setPassword}
                                    />
                                    <div className='link'>
                                        <Link className='link--forgot-password' href='/forget/password'>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={loginReq} />
                        </div>
                    </div>
                </div>
                <div className="section__background">
                    <Image src='/image__section__background.svg' alt='image' width={580} height={580} />
                </div>
            </div>
        </>
    )
}
