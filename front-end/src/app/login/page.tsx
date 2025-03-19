import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className="relative w-[1440px] h-screen bg-[#FFFFFF]">
            <Image className='absolute top-0 left-0'
                src={'/Log In or Sign Up.png'}
                alt="Log In or Sign Up"
                width={682}
                height={800}
            />
            <div className="absolute top-[100px] left-[100px]">
            </div>
        </div>
    );
}

export default LoginPage;