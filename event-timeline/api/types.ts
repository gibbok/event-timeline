export const enum JobEventTypeAPI {
    Scheduled = 'scheduled',
    Started = 'started',
    OnBreak = 'on_break',
    ClockedOut = 'clocked_out',
    InProgress = 'in_progress',
    Downtime = 'downtime',
    Canceled = 'canceled',
    Complete = 'complete',
    DowntimeReportSubmitted = 'downtime_report_submitted',
    OverrunReportSubmitted = 'overrun_report_submitted',
    HeadcountChanged = 'headcount_changed',
    SubmitDowntimeReportCauses = 'submit_downtime_report_causes',
    JobSignedOff = "job_signed_off"
}

export type EventAPI = Readonly<{
    job_event_id: string;
    job_card_id: string;
    job_event_type: JobEventTypeAPI;
    job_event_user: string;
    job_event_metadata: JobEventMetadataAPI;
    job_event_occurrence: string;
}>

export type JobEventMetadataAPI = Readonly<{
    device?: DeviceAPI;
    job_headcount?: number;
    checked_pre_flight_checks?: CheckedPreFlightCheckAPI[];
    causes?: CausesAPI;
    note?: string;
    in_process_check?: InProcessCheckAPI;
}>

export type CausesAPI = Readonly<{
    Design: string[];
    Rework?: string[];
}>

export type CheckedPreFlightCheckAPI = Readonly<{
    images: ReadonlyArray<ImageAPI>;
    content: string;
    category: string;
}>

export type ImageAPI = Readonly<{
    path: string;
    title: string;
}>

export type DeviceAPI = Readonly<{
    station: StationAPI;
    device_id: string;
}>

export type StationAPI = Readonly<{
    zone_name: string;
    factory_name: string;
    partner_name: string;
    station_name: string;
}>

export type InProcessCheckAPI = Readonly<{
    name: string;
    type: string;
    order: number;
    images: ReadonlyArray<ImageAPI[]>;
    addressed_on: string;
    check_status: string;
    check?: string;
    content?: string;
}>

export type EventsAPI = ReadonlyArray<EventAPI>

export type ResponseEventsAPI = Readonly<{
    countEvents: number,
    events: EventsAPI
}>

