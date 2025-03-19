import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className="relative w-[1440px] h-screen bg-[#FFFFFF]">
            <Image className='absolute top-[0px] left-0 h-screen'
                src={'/Log In or Sign Up.png'}
                alt="Log In or Sign Up"
                width={682}
                height={800}
            />
            <div className="absolute top-[175px] left-[815px] flex justify-center">
                <span className="text-black w-[289px]"
                    style={{ fontSize: "48px", fontWeight: 700 }}>
                    Get Started.
                </span>
            </div>
        </div>
    );
}

export default LoginPage;