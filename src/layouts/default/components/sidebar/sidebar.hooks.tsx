import useLayout from "@/hooks/useLayout";
import { useUser } from "@/hooks/useUser";
import { logOutRequest } from "@/services/authService/authService";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const useSidebar = () => {
    const { setUser } = useUser();
    const { sidebarToggle } = useLayout();

    const { mutateAsync } = useMutation({
        mutationFn: logOutRequest,
        mutationKey: ["logout"],
    });

    const logout = async () => {
        const res = await mutateAsync();
        if (res.code === "error")
            return toast(res.error.message, { type: "error" });
        toast(res.data.message, { type: "success" });
        sidebarToggle();
        setUser(null);
    };

    return { logout };
};

export default useSidebar;
