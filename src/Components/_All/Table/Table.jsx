import React from 'react';

//pasamos por props los datos de la API
const Table = (props) => {
    console.log(props)

    return (
    // mapeamos para conseguir que nos pinte una tabla por cada uno de los repos que contenga

        <div>
            <div className="tablecontainer">
                {props.apidata.map((item) => (
                    <>
                        <table className="tablecontainer">

                            <tr className="tablecontainer-table">
                                <th className="tablecontainer-table-header">{item.name}</th>
                                <td className="tablecontainer-table-row">{item.id}</td>
                            </tr>

                        </table>
                    </>

                ))

                }
            </div>

        </div>
    )
}

export default Table
