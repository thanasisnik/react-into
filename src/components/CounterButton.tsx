type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClass?: string;
}

const counterButton = ({onClick, disabled = false, label, addClass = "bg-black"} : ButtonProps) => {
    return (
        <>
            <button onClick={onClick}
                    disabled={disabled}
                    className={" text-white  py-2 px-4 rounded-lg cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed " + addClass} >
                {label}
            </button>
        </>
    )
}

export default counterButton;