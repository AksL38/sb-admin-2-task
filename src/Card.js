
export default function Card(props) {
    return <div className="col-xl-3 col-md-6 mb-4">
        <div className={"card border-left-" + props.data.color + " shadow h-100 py-2"}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={"text-xs font-weight-bold text-" + props.data.color + " text-uppercase mb-1"}>{props.data.title}
                        </div>
                        {
                            !props.data.progress
                                ?
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.info}</div>
                                :
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.info}</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                style={{ width: props.data.info }} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-auto">
                        <i className={"fas " + props.data.icon + " fa-2x text-gray-300"}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
}