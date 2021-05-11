import { Component } from 'react';
import { connect } from 'react-redux';
import { asyncAddDevice } from '../../redux/actions/devices';

class AddDevice extends Component {
    
    constructor(props){
        super(props);

        this.state = {  
            system_name: '',
            type: '',
            hdd_capacity: 0
        };
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
        this.props.addDevice( this.state );
        this.returnHome();
    }

    returnHome = () => { this.props.history.push('/'); }

    render(){
        return (
            <div className="add-device">
                <h1>Add Device</h1>
    
                <form>
                    <div className="add-device__control">
                        <label htmlFor="add_systemName">System Name*</label>
                        <input type="text" value={ this.state.system_name } name="add_systemName" id="add_systemName" onChange={ this.onNameChange } />
                    </div>

                    <div className="add-device__control">
                        <label htmlFor="add_type">Type*</label>
                        <input type="text" value={ this.state.type } name="add_type" id="add_type" onChange={ this.onTypeChange } />
                    </div>

                    <div className="add-device__control">
                        <label htmlFor="add_hdd">HDD Capacity (GB)*</label>
                        <input type="text" value={ this.state.hdd_capacity } name="add_hdd" id="add_hdd" onChange={ this.onHDDChange } />
                    </div>

                    <div className="add-device__buttons">
                        <button 
                            type="button" 
                            className="add-device__buttons__button add-device__buttons__button--save"
                            onClick={ this.onHandlerSave }
                        >Save</button>

                        <button 
                            type="button" 
                            className="add-device__buttons__button add-device__buttons__button--close"
                            onClick={ this.returnHome }
                        >Close</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addDevice: device => dispatch( asyncAddDevice(device) )
});

export default connect(null, mapDispatchToProps)(AddDevice);