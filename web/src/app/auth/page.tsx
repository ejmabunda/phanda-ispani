import Link from 'next/link';
import Icon from "@mdi/react";
import { mdiGoogle } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

export default function Auth() {
    /* Authentication methods */
    const auth_methods = [
        {
            'name': 'Sign Up',
            'icon': 'None',
            'link': 'auth/register'
        },
        {
            'name': 'Continue with Google',
            'icon': mdiGoogle,
            'link': 'coming_soon'
        },
        {
            'name': 'Continue with Facebook',
            'icon': mdiFacebook,
            'link': 'coming_soon'
        }
    ];

    return (
        <>
            <header>
                <h1 className='font-bold text-center text-4xl'>Welcome to Phanda Ispani</h1>
            </header>

            <section id="auth" className="text-center flex flex-col gap-5">
                {auth_methods.map((method, index) =>
                    <Link
                        key={index}
                        href={method.link}
                        className="bg-black rounded-lg mx-5 text-lavendar flex gap-3 justify-center p-2">
                        {method.icon !== 'None' && (
                            <Icon
                                path={method.icon}
                                size={1}
                            />)}
                        <span>{method.name}</span>
                    </Link>
                )}
                <p>Have an account? <Link href="/login" className='text-gotham'>Log In</Link></p>
            </section>
        </>
    );
}
