import React from 'react'

interface Props {

}

const Breadcrumbs = (props: Props) => {
    return (
        <div className="container pl-0">
            <nav aria-label="breadcrumb">
                <h2 className='sr-only'>You are here:</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href='https://gcintranet.tpsgc-pwgsc.gc.ca/voyage-gc-travel/index-fra.html'>GC Travel</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Government of Canada travel calculator</li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs
