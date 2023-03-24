import { CausesAPI, DeviceAPI, EventsAPI, JobEventMetadataAPI, JobEventTypeAPI } from "@/api/types"

export type Reason = string

export type CausesUI = Readonly<{
    design: ReadonlyArray<Reason>
    rework?: ReadonlyArray<Reason>
}>

export type DeviceUI = Readonly<{
    deviceId: string
    zoneName: string,
    factoryName: string,
    partnerName: string,
    stationName: string
}>

export type EventUI = Readonly<{
    id: string;
    cardId: string
    type: JobEventTypeAPI,
    userName: string,
    occurrence: string,
    device?: DeviceUI
    causes?: CausesUI
}>

export type EventsUI = ReadonlyArray<EventUI>

const getDeviceUIFromDeviceAPI = (device: DeviceAPI): DeviceUI =>
({
    deviceId: device.device_id,
    zoneName: device.station.zone_name,
    factoryName: device.station.factory_name,
    partnerName: device.station.partner_name,
    stationName: device.station.station_name
})


const getCausesUIFromCausedAPI = (causes: CausesAPI): CausesUI =>
({
    design: causes.Design,
    rework: causes.Rework
})


export const tranformResponseApiToUiData = (data: EventsAPI): EventsUI =>
    data.map(event =>
    ({
        id: event.job_event_id,
        cardId: event.job_card_id,
        type: event.job_event_type,
        userName: event.job_event_user,
        occurrence: event.job_event_occurrence,
        device: event.job_event_metadata.device ? getDeviceUIFromDeviceAPI(event.job_event_metadata.device) : undefined,
        causes: event.job_event_metadata.causes ? getCausesUIFromCausedAPI(event.job_event_metadata.causes) : undefined
    }))

