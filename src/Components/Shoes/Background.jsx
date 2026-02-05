
export default function Background({children}){
    return(
        <>
        <div className="
                min-h-screen 
                w-full 
                bg-gradient-to-br from-orange-500 via-purple-900 to-indigo-900
                px-4 sm:px-6 lg:px-10
                overflow-x-hidden
                ">
            {children}
        </div>
        </>
    )
}