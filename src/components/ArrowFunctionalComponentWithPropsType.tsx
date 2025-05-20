// type Props = {
//     title: string;
//     description: string;
// }

type  A = {
    title: string;
}

type B = {
    description: string;
}
type Props = A & B;

// interface Props {
//     title: string;
// }
//
// interface Props {
//     description: string;
// }

const ArrowFunctionalComponentWithProps = ({ title, description }: Props ) => {
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-12 text-purple-800">{title}</h1>
            <p className="text-gray-700 text-center">{description}</p>
        </>
    )

}

export default ArrowFunctionalComponentWithProps;