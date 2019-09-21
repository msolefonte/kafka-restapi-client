export type ApiVersion = "v1" | "v2";

export type EmbeddedFormat = "avro" | "binary" | "json";

export interface KafkaRestClientConfig {
    apiVersion?: ApiVersion;
    embeddedFormat?: EmbeddedFormat;
    serializationFormat?: SerializationFormat;
    url?: string;
}

export interface Partition {
    partition: number;
    leader: number;
    replicas: Replica[]
}

export interface Replica {
    broker: number;
    leader: boolean;
    in_sync: boolean;
}

export type SerializationFormat = "json";