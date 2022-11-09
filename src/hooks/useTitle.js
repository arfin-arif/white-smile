import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - White Smile`;
    }, [title])
};
export default useTitle;