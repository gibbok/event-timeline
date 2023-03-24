export type Event = Readonly<{
    job_event_id: string;
    job_card_id: string;
    job_event_type: string;
    job_event_user: string;
    job_event_metadata: JobEventMetadata;
    job_event_occurrence: string;
}>

export type JobEventMetadata = Readonly<{
    device?: Device;
    job_headcount?: number;
    checked_pre_flight_checks?: CheckedPreFlightCheck[];
    causes?: Causes;
    note?: string;
    in_process_check?: InProcessCheck;
}>

export type Causes = Readonly<{
    Design: string[];
    Rework?: string[];
}>

export type CheckedPreFlightCheck = Readonly<{
    images: Image[];
    content: string;
    category: string;
}>

export type Image = Readonly<{
    path: string;
    title: string;
}>

export type Device = Readonly<{
    station: Station;
    device_id: string;
}>

export type Station = Readonly<{
    zone_name: string;
    factory_name: string;
    partner_name: string;
    station_name: string;
}>

export type InProcessCheck = Readonly<{
    name: string;
    type: string;
    order: number;
    images: Image[];
    addressed_on: string;
    check_status: string;
    check?: string;
    content?: string;
}>

export type Events = ReadonlyArray<Event>


