import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PhoneMax`
    }, [title])
}
export default useTitle