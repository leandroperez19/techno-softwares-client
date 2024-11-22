import { FC } from "react";
import { ExpandableProps } from "./expandable.types";
import { ExpandableWrapper } from "./expandable.styled";
import { FaChevronDown } from "@/assets/icons";
import useExpandable from "./expandable.hooks";

const Expandable: FC<ExpandableProps> = ({
    children,
    title,
    rotateIcon = true,
    active = false,
    icon = <FaChevronDown />,
    className,
    iconClassName,
    topClassName,
}) => {
    const { expandable, expandableToggle, expandableKeyboard } =
        useExpandable(active);

    return (
        <ExpandableWrapper
            $rotateIcon={rotateIcon}
            ref={expandable}
            className={className}
        >
            <div
                className={`toggle flex items-center text-xs md:text-sm w-full justify-between ${topClassName}`}
                role="button"
                onClick={expandableToggle}
                onKeyDown={expandableKeyboard}
                tabIndex={0}
            >
                <span className="text-[20px] text-accent font-semibold">
                    {title}
                </span>
                <div className={`icon text-md text-septenary ${iconClassName}`}>
                    {icon}
                </div>
            </div>
            <div className="to-display">
                <div>
                    <div className="expandable_content">{children}</div>
                </div>
            </div>
        </ExpandableWrapper>
    );
};

export default Expandable;
