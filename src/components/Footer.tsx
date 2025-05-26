const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
        <footer className="bg-gray-700 ">
            <div className="text-gray-300 text-center  py-4">
                Copyright {currentYear}, Coding Factory 7
            </div>
        </footer>
        </>
    )
}

export default Footer;