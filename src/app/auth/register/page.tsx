import Link from 'next/link';

export default function Register() {
    const inputs = [
        {
            'id': 'name',
            'type': 'text',
            'name': 'name'
        },
        {
            'id': 'email',
            'type': 'email',
            'name': 'email'
        },
        {
            'id': 'tel',
            'type': 'tel',
            'name': 'tel'
        },
        {
            'id': 'password',
            'type': 'password',
            'name': 'password'
        },
        {
            'id': 'confirm',
            'type': 'password',
            'name': 'confirm'
        },
    ]
    return (
        <>
            <div className="p-5">
                <header className="pb-5">
                    <h1 className='font-bold text-center text-4xl'>Register</h1>
                </header>

                <form className="flex flex-col gap-5">
                    <div className="bg-black flex flex-col  rounded-md overflow-hidden text-lavendar">
                        {inputs.map((input, index) =>
                            <input className="bg-black p-3 border-b"
                                key={index}
                                id={input.id}
                                name={input.name}
                                type={input.type}
                                placeholder={input.name.charAt(0).toUpperCase() + input.name.slice(1)}
                                required
                            />
                        )}
                    </div>

                    <input className="bg-black p-3 text-lavendar rounded-md" type="submit" id="register" name="register" value="Sign Up" />
                    <Link href="/explore" className="bg-black p-3 text-lavendar rounded-md">For testing</Link>
                </form>
            </div>

            <Link href="/help" className="text-center">Need help? </Link>
        </>
    );
}
