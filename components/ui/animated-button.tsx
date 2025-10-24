import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
    children: ReactNode;
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    onClick?: () => void;
    href?: string;
    style?: React.CSSProperties;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    children,
    variant = "default",
    size = "default",
    className = "",
    onClick,
    href,
    style,
    ...props
}) => {
    const buttonVariants: Variants = {
        initial: {
            scale: 1,
            y: 0,
        },
        hover: {
            scale: 1.02,
            y: -1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95,
            y: 0,
        }
    };

    const buttonContent = (
        <motion.div
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={className}
            style={style}
            {...props}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {buttonContent}
            </a>
        );
    }

    return (
        <div onClick={onClick} className="cursor-pointer">
            {buttonContent}
        </div>
    );
};

interface AnimatedButtonWithIconProps extends Omit<AnimatedButtonProps, 'children'> {
    children: ReactNode;
}

export const AnimatedButtonWithIcon: React.FC<AnimatedButtonWithIconProps> = ({
    children,
    className = "",
    onClick,
    href,
    ...props
}) => {
    const iconVariants: Variants = {
        initial: {
            x: 0,
        },
        hover: {
            x: 4,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <AnimatedButton className={className} onClick={onClick} href={href} {...props}>
            <div className="flex items-center justify-center">
                {children}
                <motion.div variants={iconVariants}>
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                </motion.div>
            </div>
        </AnimatedButton>
    );
};
