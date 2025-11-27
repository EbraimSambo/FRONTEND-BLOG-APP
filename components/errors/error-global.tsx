import Image from 'next/image'

const ErrorGlobal = ({ message, height }: { message?: string, height?: string }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${height || "h-screen "}`}>
            <Image src={"/error-5000.svg"} alt="Error 500" width={500} height={500} />
            <p>{message || 'Desculpe, algo deu errado. Tente novamente mais tarde'}.</p>
        </div>
    )
}

export default ErrorGlobal