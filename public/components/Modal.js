
export default function Modal(props) {

    const modalState = props.toggle
    const action = props.action

    return (
        <div className={"container" + (modalState ? " container-active" : "")}   >
            <div className="modal">
                modal content
                <div className="close" onClick={action}>
                </div>
            </div>
            <link rel="stylesheet" href="../../css/style.css" />
        </div>

    )
}