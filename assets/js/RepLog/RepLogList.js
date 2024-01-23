import React from "react";
import PropTypes from "prop-types";

export default function RepLogList(props) {
    const {highlightedRowId, onRowClick, repLogs, onDeleteRepLog, isLoaded, isSavingNewRepLog } = props;
    const handleDeleteClick = function (event, repLogId) {
        event.preventDefault(); // The browser doesnt try to follow the link
        
        onDeleteRepLog(repLogId);
    }
    
    if(!isLoaded){
        return (
            <tbody>
                <tr>
                    <td colSpan="4" className="text-center">Loading...</td>
                </tr>
            </tbody>
        )
    }

    return (
        <tbody>
        {repLogs.map((repLog) =>
            (
                <tr key={repLog.id}
                    className={highlightedRowId === repLog.id ? 'info' : ''}
                    onClick={(event) => onRowClick(repLog.id)}
                >
                    <td>{repLog.itemLabel}</td>
                    <td>{repLog.reps}</td>
                    <td>{repLog.totalWeightLifted}</td>
                    <td>
                        <a href="" onClick={(event) => handleDeleteClick(event, repLog.id)}>
                            <span className="fa fa-trash"></span>
                        </a>
                    </td>
                </tr>
            )
        )
        }
        {isSavingNewRepLog && (
            <tr>
                <td
                    colSpan="4"
                    className="text-center"
                    style={{
                        opacity: .5
                    }}
                >lifting to the database...</td>
            </tr>
        )}
        </tbody>
    );
}

RepLogList.propTypes = {
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    onDeleteRepLog: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isSavingNewRepLog: PropTypes.bool.isRequired,
}
