import Loader from "react-loader-spinner";

export default function LoadingSpinner() {
    return (
        <Loader
            type="Circles"
            color='#000000'
            height={100}
            width={100}
        />
    )
}