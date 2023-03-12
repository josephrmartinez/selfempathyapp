export default function FormWrapper({ title, children }) {
    return (
        <>
            <div className="flex flex-col justify-center"><div className="text-sm text-center">{title}</div></div>
            <div className="flex flex-col items-center w-full">{children}</div>
        </>
    )
}
