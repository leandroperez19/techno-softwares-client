import { useUser } from "@/hooks/useUser";
import { logOutRequest } from "@/services/authService/authService";
import { useEffect, useRef } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const useNavbar = () => {
    const nav = useRef<HTMLElement>(null);
    const previousScrollTop = 0;
    const { setUser } = useUser();

    const { mutateAsync } = useMutation({
        mutationFn: logOutRequest,
        mutationKey: ["logout"],
    });

    const scrollHandler = () => {
        const currentScrollTop = window.scrollY;

        const nav = document.querySelector("nav");
        if (!nav) return;

        if (currentScrollTop >= 30 && currentScrollTop > previousScrollTop) {
            nav.classList.add("navbar-transparent");
        } else {
            setTimeout(() => nav.classList.remove("navbar-transparent"), 10);
        }
    };

    const logout = async () => {
        const res = await mutateAsync();
        if (res.code === "error")
            return toast(res.error.message, { type: "error" });
        toast(res.data.message, { type: "success" });
        setUser(null);
    };

    useEffect(() => {
        const navbar = nav.current;
        scrollHandler();

        document.addEventListener("scroll", scrollHandler);

        return () => {
            document.removeEventListener("scroll", scrollHandler);
            navbar?.classList.remove("navbar-transparent");
        };
    }, []);

    return {
        nav,
        logout,
    };
};

export default useNavbar;
