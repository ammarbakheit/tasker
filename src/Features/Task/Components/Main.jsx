const Main = () => {
    return (
        <div className="px-10 w-full">
            <span className="font-bold text-lg mx-2">Tasks</span>
            <div className=" flex lg:flex-row flex-col">
                <Col />
                <Col />
                <Col />
            </div>


        </div>
    );
}

export default Main;

const Col = () => {
    return (
        <div className="w-full mx-2 my-2 flex flex-col justify-between bg-indigo-50 px-5 py-2 rounded-lg">
            <div className="flex flex-row justify-between">
                <span>Todo</span>
                <div className="bg-indigo-100 w-6 h-6 flex justify-center items-center rounded-lg">
                    <span className="text-xs font-medium text-indigo-900"> 0</span>
                </div>
            </div>

            <div className="py-2">
                <button className="bg-indigo-300 w-full rounded-lg py-1 flex justify-center items-center text-white font-medium"> + </button>
            </div>


            <div className="py-2">
                <div className="bg-white rounded-lg px-2 py-2 shadow-md shadow-slate-300">
                    <div className="mb-2 flex   flex-row w-full justify-between items-center">
                        <div>
                            <div className="w-1  h-1 bg-green-500  rounded-lg mr-1"></div>
                        </div>
                        <span > finishing learning react, redux, redux-toolkit</span>
                    </div>
                    <p className="text-xs text-gray-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dicta corporis
                        ipsum consequatur repudiandae accusantium, odio facere, eaque dolorum recusandae
                        minima. Maiores aliquid consequuntur nihil nesciunt repellendus perspiciatis
                        temporibus vitae! </p>
                </div>
            </div>
        </div>
    );
}