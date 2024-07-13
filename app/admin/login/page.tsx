    'use client'
    import './style.scss'
    import Image from 'next/image'
    import Link from 'next/link'
    import { useState, useEffect } from 'react'
    import Logo from '@/components/admin/logo_admin/logo'
    import Input from '@/components/admin/input/input'
    import Button from '@/components/admin/button/button'

    export default function Page() {
        const [Email,setEmail] = useState('')
        const [Password,setPassword] = useState('')
        console.log(Email)
        console.log(Password)
        return (
            <div className='section section--login'>
                <div className='section__box'>
                    <div className='section__box-login'>
                        <div className='section__box-container'>
                            <Logo />
                            <div className='section__inputs-gurp'>
                                <Input label={'Email Address'} type={'text'} icon={'email.svg'} value={Email} onChange={setEmail} />
                                <div className='section__input-password'>
                                    <Input label={'Password'} type={'password'} icon={'lock.svg'} value={Password} onChange={setPassword} />
                                    <div className='link'>
                                        <Link className=' link--forgot-password' href={'/forget/password'}>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Button />
                        </div>
                    </div>
                </div>
                <div className="section__background">
                    <Image src={'/image__section__background.svg'} alt='image' width={580} height={580} />
                </div>
            </div>
        )
    }
