import React from "react";
import RepLogList from "./RepLogList";
import PropTypes from "prop-types";
import RepLogCreator from "./RepLogCreator";

const calculateTotalWeightLiftedFancier = repLogs => repLogs.reduce((total, log) => total + log.totalWeightLifted, 0);

export default function RepLogs(props) {
    const { 
        withHeart, 
        highlightedRowId,
        onRowClick,
        repLogs,
        onAddRepLog,
        numberOfHearts,
        onHeartChange
    } = props;
    
    let heart = '';
    if(withHeart){
        heart = <span>{'❤'.repeat(numberOfHearts)}️</span>;
    }

    return (
        <div className="col-md-7 js-rep-log-table">
            <h2>Lift Stuff! {heart}</h2>
            
            <input 
                type="range"
                value={numberOfHearts}
                onChange={(e) => {
                    onHeartChange(+e.target.value)
                }}
            />
            
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>What</th>
                    <th>How many times?</th>
                    <th>Weight</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <RepLogList
                    highlightedRowId={highlightedRowId}
                    onRowClick={onRowClick}
                    repLogs={repLogs}
                />
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <th>Total</th>
                    <th>{calculateTotalWeightLiftedFancier(repLogs)}</th>
                    <td>&nbsp;</td>
                </tr>
                </tfoot>
            </table>
            
            <div className="row">
                <div className="col-md-6">
                    <RepLogCreator onAddRepLog={onAddRepLog} />  
                </div>
            </div>
        </div>
    );
}

RepLogs.propTypes = {
    withHeart: PropTypes.bool,
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    onAddRepLog: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    numberOfHearts: PropTypes.number.isRequired,
    onHeartChange: PropTypes.func.isRequired
}
