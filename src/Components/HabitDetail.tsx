import { useParams } from "react-router-dom";

function HabitDetail () {
    const { id } = useParams();

    return (
        <div className="w-full ">
            <h1>Habit Detail page here: {id}</h1>
        </div>
    );
}

export default HabitDetail;