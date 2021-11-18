export interface CpuObject {
    name: string
    manufacturer: string 
    numberOfPhysicalCores: string 
    numberOfLogicalCores: string
    maxClockSpeedGHz: number
    actualClockSpeedGHz: number
    maxClockSpeedMHz: number
    actualClockSpeedMHz: number
    loadPercentage: number
}