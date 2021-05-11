const selectDevices = (devices, filter, order) => {
    let devices_filteres = devices;

    if( filter !== null && filter.trim().length > 0 ){
        devices_filteres = devices_filteres.filter( d => d.type === filter );
    }

    if( order !== null && order.trim().length > 0 ){
        let devices_filteres_clone = [...devices_filteres];
        
        if( order.toLowerCase() === 'system_name' ){
            orderByArgument(devices_filteres_clone, 'system_name');
        }

        if( order.toLowerCase() === 'hdd_capacity' ){
            orderByArgument(devices_filteres_clone, 'hdd_capacity');
        }

        devices_filteres = devices_filteres_clone;
    }

    return devices_filteres;
};

const orderByArgument = (array, argument) => {
    for( var i = 0; i < array.length; i++ ){
        for( var j = 0; j < array.length - 1; j++ ){
            var compV1 = array[j][argument];
            var compV2 = array[j+1][argument];

            if( argument === 'hdd_capacity' ){
                compV1 = parseInt( compV1 );
                compV2 = parseInt( compV2 );
            }

            if( compV1 > compV2 ){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

export default selectDevices;