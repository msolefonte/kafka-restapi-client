'use strict';

import {
    ApiVersion,
    EmbeddedFormat,
    KafkaRestClientConfig,
    Partition,
    SerializationFormat
} from '../../types/'

export class KafkaRestClient {

    private readonly apiVersion: ApiVersion;
    private readonly contentType: string;
    private readonly embeddedFormat: EmbeddedFormat;
    private readonly serializationFormat: SerializationFormat;
    private readonly url: string;

    constructor(config: KafkaRestClientConfig) {
        this.apiVersion = config.apiVersion || "v2";
        this.embeddedFormat = config.embeddedFormat || "binary";
        this.serializationFormat = config.serializationFormat || "json";
        this.url = config.url || "http://localhost:8082";

        this.contentType = "application/vnd.kafka." + this.embeddedFormat + "." + this.apiVersion + "+" +
            this.serializationFormat
    }

    // Get a list of Kafka topics.
    getTopics(): string[] {
        return
    }

    // Get metadata about a specific topic.
    getTopicMetadata(topicName: string): TopicMetadata {
        return
    }

    // Produce messages to a topic, optionally specifying keys or partitions for the messages.
    produceMessage(topicName: string, partitionId: number = undefined): void {
        return
    }

    // Get a list of partitions for the topic.
    getPartitions(): Partition[] {
        return
    }

    // Get metadata about a single partition in the topic.
    getPartitionMetadata(topicName: string, partitionId: number): PartitionMetadata {
        return
    }

    // Produce messages to one partition of the topic.
    // produceMessageToPartition(topicName: string, partitionId: number): void {}

    // Create a new consumer instance in the consumer group.
    createConsumer(groupName: string) {}

    // Destroy the consumer instance.
    deleteConsumer() {}

    // Commit a list of offsets for the consumer.
    commitOffsets() {}

    // Get the last committed offsets for the given partitions (whether the commit happened by this process or another).
    getOffsets() {}

    // subcribeConsumer
}

/*
CONSUMER
    createConsumer
    deleteConsumer
    commitOffsets
    getOffsets
    subscribe
    getSubscriptions
    deleteSubscription
    assignPartitions
    getAssignedPartitions
    overrideOffsets
    //Seek to the first offset for each of the given partitions.
    //Seek to the last offset for each of the given partitions.
    //Fetch data for the topics or partitions specified using one of the subscribe/assign APIs.
 */

//getBrokers