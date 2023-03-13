
import React from 'react';

export default function CartItem(props) {
    return (
        <div>
            {props.orderCollectorArray.map(function (orderArraydata, idx) {
                return (
                    <div key={idx} >
                        {orderArraydata.name == 'maratha chiken' &&
                            <p>
                                Your dish  {orderArraydata.name}
                            </p>
                        }
                        {orderArraydata.name == 'panjabi tadka' &&
                            <p>
                                Your dish  {orderArraydata.name}
                            </p>
                        }
                        {orderArraydata.name == 'arabian tandorii' &&
                            <p>
                                Your dish  {orderArraydata.name}
                            </p>
                        }
                        {orderArraydata.name == 'kolahpuri chiken' &&
                            <p>
                                Your dish  {orderArraydata.name}
                            </p>
                        }
                        {orderArraydata.name == 'Paper Dosa' &&
                            <p>
                                Your dish  {orderArraydata.name}
                            </p>
                        }
                        {orderArraydata.name == 'Garlic chilli' &&
                            <p>
                                Your dish  {orderArraydata.name}
                            </p>
                        }
                    </div>
                )
            })}
        </div>
    );
}

// export default carosel;