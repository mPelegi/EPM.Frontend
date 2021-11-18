import { CpuObject } from "./hardwares/cpu";
import { DriveObject } from "./hardwares/drive";
import { GpuObject } from "./hardwares/gpu";
import { MoboObject } from "./hardwares/mobo";
import { RamObject } from "./hardwares/ram";
import { OsObject } from "./softwares/os";

export interface DescriptionObject{
    cpu: CpuObject;
    gpu: GpuObject;
    motherBoard: MoboObject;
    rams: Array<RamObject>;
    drives: Array<DriveObject>;
    operatingSystem: OsObject;
}