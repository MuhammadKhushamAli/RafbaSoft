import { useNavigate } from "react-router";

export default function Button({ children, navigateTo, className, ...props }) {
    const navigate = useNavigate();

    return (
        <button type="button"
            onClick={() => navigate(navigateTo)}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}