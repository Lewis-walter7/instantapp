import useSWR from "swr"
import fetcher from "../lib/fetcher"

const useUsers = () => {
    const { data, isLoading, mutate,error} = useSWR('/api/users', fetcher)

    return {
        data, isLoading,mutate,error
    }
}

export default useUsers