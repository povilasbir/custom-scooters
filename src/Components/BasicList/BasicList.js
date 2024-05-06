import React from 'react'
// import { API_URL } from '../../config'
import { Link } from 'react-router-dom'

function BasicList({ list, exclude, urlSnippet }) {

    let listKeys = []

    function formatKeyTitles(title) {
        const result = title.replace(/([A-Z])/g, " $1");
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult
    }

    if (list) {
        listKeys = Object.keys(list[0])
    }

    return (
        <>
            {list && (<table id="fancy-table" className='list-wrap'>
                <thead>
                    <tr id="table-header">
                        {listKeys.map((item, index) => {
                            if (exclude && exclude.includes(item)) {
                                return null
                            } else {
                                return <th id="table-head-row" key={index}>{formatKeyTitles(item)}</th>
                            }
                        })}
                    </tr>
                </thead>
                <tbody id="table-body">
                    {list.map(item => <tr key={item.id}>
                        {listKeys.map((key, index) => {
                            if (exclude && exclude.includes(key)) {
                                return null
                            } else {
                                return <td key={index} id="table-data-row"><Link to={urlSnippet + item.id}>{item[key]}</Link></td>
                            }
                        })}
                    </tr>)}
                </tbody>
            </table>)}
        </>
    )
}

export default BasicList
