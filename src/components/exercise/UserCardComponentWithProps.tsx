type Props = {
    name: string;
    surname: string;
    age: number;
    title: string;
    description: string;
    photo: string;
}

const UserCardComponentWithProps = ({name, surname, age, title, description, photo}: Props) => {
    return (
        <>
            {/*Cards Container */}
            <div className=" min-h-20 container justify-center items-center w-full mt-20 gap-4">
            {/* Cards Elements*/}
                <div className=" bg-blue-500 text-white flex flex-col w-1/4  justify-between items-center mx-auto py-5 ">
                    <h2 className="text-xl mb-10 font-semibold mt-4">{name} {surname}, {age}</h2>
                    <img className="w-42 h-42 rounded-full border" src={photo} alt="Profile Picture" />
                    <p className="mt-10 text-xl font-semibold">{title}</p>
                    <p className="mt-2 text-lg ">{description}</p>
                </div>
            </div>
        </>
    )
}

export default UserCardComponentWithProps;