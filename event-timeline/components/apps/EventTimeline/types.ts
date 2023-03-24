import { JobEventTypeAPI } from "@/api/types"

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
    eventId: string;
    cardId: string
    type: JobEventTypeAPI,
    userName: string,
    occurrence: string,
    device?: DeviceUI
    causes?: CausesUI
    jobHeadcount?: number
}>

export type EventsUI = ReadonlyArray<EventUI>

export type EventsInfoUI = Readonly<{
    countEvents: number,
    events: EventsUI
}>
