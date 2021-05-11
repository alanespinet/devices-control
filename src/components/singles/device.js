const Device = props => (
    <div className="devices__single">
        <h2>{ props.system_name } </h2>
        <p>{ props.type }</p>
        <p>{ props.hdd_capacity }</p>
    </div>
);

export default Device;