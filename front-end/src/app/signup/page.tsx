import Image from 'next/image';

const SignupPage = () => {
    return (
        <div className="relative w-[1440px] h-screen bg-[#FFFFFF]">
            <Image className='absolute top-[0px] left-0 h-screen'
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

export default SignupPage;