import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="w-full flex flex-row bg-black/10 px-10 py-4">
            <div className="flex justify-between max-w-7xl w-full mx-auto">
                <div className="flex gap-4 items-center">
                    <Image
                        src="/images/libly-space-logo.png"
                        alt="libly-space-logo"
                        height={40}
                        width={40}
                    />

                    <p className="text-3xl font-bold" >
                        libly.space
                    </p>
                </div>

                <div className="flex flex-row gap-2">
                    <Button className="font-bold bg-blue-500 text-lg">
                        Get Started
                    </Button>
                    <Button className="font-bold text-lg">
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
