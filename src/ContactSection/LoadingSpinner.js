import Loader from "react-loader-spinner";

export default function LoadingSpinner({ color = '#000000' }) {
    return (
        <Loader
            type="Circles"
            color={color}
            height={100}
            width={100}
        />
    )
}