'use client'
import './style.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './_components/logo_admin/logo'
import Input from './_components/input/input'
import Button from './_components/button/button'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { setCookie ,getCookie } from 'cookies-next';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isClient, setIsClient] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 1224 });
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
        const token = getCookie('jwt')
        if(token){
            router.push('/admin/dashbord')
        }
    }, []);

    const loginReq = async () => {
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

            toast.success('Login successful', {
                position: 'top-center'
            });
            setCookie('jwt', response.data.data.token)
            setTimeout(()=>{
                router.push('/admin/dashbord')
            },2000)
        } catch (error) {
            toast.error('The email or password is incorrect.', {
                position: 'top-center'
            });
            console.error('Error:', error); // التعامل مع الأخطاء إذا حدثت
        }
    };

    if (!isClient) {
        return null; // عدم عرض أي شيء حتى يتم التوليد في المتصفح
    }

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
                {
                    isDesktop && (
                        <div className="section__background">
                            <Image src='/image__section__background.svg' alt='image' width={580} height={580} />
                        </div>
                    )
                }
            </div>
        </>
    )
}
