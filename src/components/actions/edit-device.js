import { Component } from 'react';
import { connect } from 'react-redux';
import { asyncEditDevice } from '../../redux/actions/devices';

class EditDevice extends Component {
    
    constructor(props){
        super(props);
        this.state = this.props.selectedDevice;
    }

    onNameChange = e => {
        this.setState( prevState => ({
            ...prevState,
            system_name: e.target.value
        }) );
    };

    onTypeChange = e => {
        this.setState( prevState => ({
            ...prevState,
            type: e.target.value
        }) );
    };

    onHDDChange = e => {
        this.setState( prevState => ({
            ...prevState,
            hdd_capacity: e.target.value
        }) );
    };

    onHandlerSave = () => {
        if( this.state.system_name.trim().length === 0 || this.state.type.trim().length === 0 || this.state.hdd_capacity.trim().length === 0 || parseInt(this.state.hdd_capacity) <= 0 ){
            alert('One or more fields are blank. Please note that ALL information is required');
            return false;
        }
        
        // we don't want to pass the id as part of the object
        const edit_device = {
            system_name: this.state.system_name,
            type: this.state.type,
            hdd_capacity: this.state.hdd_capacity
        };

        this.props.editDevice( this.state.id, edit_device );
        this.returnHome();
    }

    returnHome = () => { this.props.history.push('/'); }

    render(){
        return (
            <div className="add-device">
                <h1>Edit Device</h1>
    
                <form className="device-action-form">
                    <div className="device-action-form__control">
                        <label htmlFor="add_systemName">System Name*</label>
                        <input type="text" required value={ this.state.system_name } name="add_systemName" id="add_systemName" onChange={ this.onNameChange } />
                    </div>

                    <div className="device-action-form__control">
                        <label htmlFor="add_type">Type*</label>
                        <input type="text" required value={ this.state.type } name="add_type" id="add_type" onChange={ this.onTypeChange } />
                    </div>

                    <div className="device-action-form__control">
                        <label htmlFor="add_hdd">HDD Capacity (GB)*</label>
                        <input type="text" required value={ this.state.hdd_capacity } name="add_hdd" id="add_hdd" onChange={ this.onHDDChange } />
                    </div>

                    <div className="device-action-form__buttons">
                        <button 
                            type="button" 
                            className="device-action-form__buttons__button device-action-form__buttons__button--save"
                            onClick={ this.onHandlerSave }
                        >Save</button>

                        <button 
                            type="button" 
                            className="device-action-form__buttons__button device-action-form__buttons__button--close"
                            onClick={ this.returnHome }
                        >Close</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editDevice: (id, device) => dispatch( asyncEditDevice(id, device) )
});

const mapStateToProps = state => ({
    selectedDevice: state.devicesReducer.selectedDevice
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDevice);