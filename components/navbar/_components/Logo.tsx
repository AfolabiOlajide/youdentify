import Link from "next/link";

const Logo = () => {
    return (
        <>
            <Link href={"/"}>
                <span className="ml-3 mr-2 text-xl font-bold">
                    YouDenti<span className="text-brand">Fi </span>
                </span>
            </Link>
        </>
    );
};

export default Logo;
