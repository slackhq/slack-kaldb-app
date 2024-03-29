import React from 'react'
import { Log } from 'datasource/types'
import { LogColumn, LogColumnType } from 'datasource/components/Logs/types'
import LogsTable from 'datasource/components/Logs/LogsTable'


interface LogsViewProps {
    logs: Log[];
    timeField: string;
    timestamps: string[];
    datasourceUid: string;
    datasourceName: string;
    datasourceField: string;
    logMessageField: string;
}

const LogsView = ({ logs, timeField, timestamps, datasourceUid, datasourceName, datasourceField, logMessageField }: LogsViewProps) => {
    const [columns, setColumns] = React.useState<LogColumn[]>([
        {
            logColumnType: LogColumnType.TIME,
            underlyingFieldName: timeField

        }, 
        {
            logColumnType: LogColumnType.DOCUMENT,
            underlyingFieldName: null
        }]);

    const [ expandedRows, setExpandedRows ] = React.useState(Array(logs.length).fill(false));

    if (logs.length === 0) {
        return (
            <></>
        );
    }


    return (
        <LogsTable
            logs={logs}
            timeField={timeField}
            columns={columns}
            timestamps={timestamps}
            expandedRows={expandedRows}
            setExpandedRows={setExpandedRows}
            setColumns={setColumns}
            datasourceUid={datasourceUid}
            datasourceName={datasourceName}
            datasourceField={datasourceField}
            logMessageField={logMessageField}
        />
    )

};

export default LogsView
