export default function ProgressBar(props) {
    return <>
        <h4 className="small font-weight-bold">{props.data.title}<span
            className="float-right">{props.data.progress}</span></h4>
        <div className="progress mb-4">
            <div className={"progress-bar bg-" + props.data.color} role="progressbar" style={{ width: props.data.progress }}
                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </>
}