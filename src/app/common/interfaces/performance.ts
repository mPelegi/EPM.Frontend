import { CpuObject } from "./hardwares/cpu";
import { DriveObject } from "./hardwares/drive";
import { GpuObject } from "./hardwares/gpu";
import { RamObject } from "./hardwares/ram";

export interface PerformanceObject {
    cpu: CpuObject;
    gpu: GpuObject;
    ram: RamObject;
    drives: Array<DriveObject>;
}