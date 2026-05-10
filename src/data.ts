export interface WinSATData {
  system: {
    manufacturer: string;
    productName: string;
    osName: string;
    processor: string;
    ram: string;
    gpu: string;
    assessmentDate: string;
  };
  scores: {
    cpu: number;
    memory: number;
    graphics: number;
    gaming: number;
    disk: number;
    base: number;
  };
  details: {
    memoryThroughput: string;
    cpuCompression: string;
    videoBandwidth: string;
    diskSequential: string;
    diskRandom: string;
  };
}

export const mockData: WinSATData = {
  system: {
    manufacturer: "HP",
    productName: "Victus by HP Laptop 16-d0xxx",
    osName: "Windows 10 Home",
    processor: "Intel(R) Core(TM) i7-11800H @ 2.30GHz", // Inferred from typical Victus 16 specs
    ram: "16 GB (2x 8GB Samsung DDR4)",
    gpu: "Intel(R) UHD Graphics / NVIDIA GeForce RTX 3050 Ti", // Often dual GPU
    assessmentDate: "Thursday February 8, 2024",
  },
  scores: {
    cpu: 9.3,
    memory: 9.3,
    graphics: 8.0,
    gaming: 9.9,
    disk: 9.3,
    base: 8.0,
  },
  details: {
    memoryThroughput: "37,466 MB/s",
    cpuCompression: "271.0 MB/s",
    videoBandwidth: "11,178.7 MB/s",
    diskSequential: "3,511.8 MB/s",
    diskRandom: "2,104.7 MB/s",
  },
};
