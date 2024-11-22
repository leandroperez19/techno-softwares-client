import { useNavigate, useSearchParams } from "react-router-dom";

const useHome = () => {
    const [, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const dateFilterChange = (date: string) => {
        setSearchParams({ period: date });
    };

    const goToDetails = () => navigate("/sales");

    return { dateFilterChange, goToDetails };
};

export default useHome;
