'use strict';

export class KafkaRestConsumer {
    private readonly url: string;

    constructor(url: string) {
        this.url = url ;
    }

    /*
CONSUMER
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
    destroy
 */
}