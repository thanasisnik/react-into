type Props = {
    title: string;
}

// interface Props {
//     title: string;
// }

const ArrowFunctionalComponentWithProps = ({ title }: Props) => {
    return <h1 className="text-center text-3xl font-bold mt-12 text-purple-800">{title}</h1>
}

export default ArrowFunctionalComponentWithProps;