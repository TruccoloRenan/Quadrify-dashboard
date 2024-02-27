import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <>
            <div>
                <div className="items-left inline-flex p-2">
                    <h2 className="text-sm ">Dashboard</h2>
                </div>
                <form className="inline-flex float-right space-x-2 border rounded-md p-2">
                    <Search className="h-5 w-5 flex-none text-gray-300" />
                    <input
                        className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        </>
    )
}

export default SearchBar