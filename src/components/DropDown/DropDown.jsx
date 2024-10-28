
const DropDown = () => {
    return (
        <>
            <details className="dropdown">
                <summary className="btn m-1 p-5">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
        </>
    );
};

export default DropDown;