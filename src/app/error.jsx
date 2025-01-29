"use client";
export default function error({ error, reset }) {
    return(
        <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center mt-5 text-lg font-semibold text-red-800">error</p>
            <p className="text-center mt-5 text-lg font-semibold">{error.message}</p>
            <button className="btn p-2 rounded-sm mt-5 " onClick={()=> reset()}>try agian</button>
        </div>
    )
}