import { toast } from "react-toastify";


export const sendToLogin = async (router: any, go: String) => {
    toast('Silahkan Login Terlebih dahulu', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error"
    });
    location.href = "/login" + go;
}