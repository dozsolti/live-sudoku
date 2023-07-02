export default function Cell({value, onChange}) {
    function helloWorld(x)
        {
            onChange()
        }
    return <div className="flex bg-white text-black w-20 h-20 items-center justify-center">
        <input value={value} type="text" pattern="\d*" maxlength="1" className="w-full h-full text-center text-5xl" onChange={helloWorld}>
        </input>
        
    </div>
}