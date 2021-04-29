export default function ColorBlocks(props) {
    let textColor = props.data.block?"black":"white";
    return <div className="col-lg-6 mb-4">
        <div className={"card bg-" + props.data.color + " text-"+ textColor +" shadow"}>
            <div className="card-body text-capitalize">
                {props.data.color}
            <div className={"text-"+textColor+"-50 small"}>{props.data.code}</div>
            </div>
        </div>
    </div>
}