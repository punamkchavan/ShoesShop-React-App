
export default function Background({children}){
    return(
        <>
        <div className="bg-gradient-to-br from-orange-500 via-purple-900 to-indigo-900 min-h-screen w-full">
            {children}
        </div>
        </>
    )
}