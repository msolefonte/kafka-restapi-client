const { KafkaRestClient } = require("../");

["v1", "v2"].forEach((api_version) =>
{
    const krc = new KafkaRestClient({apiVersion: api_version});

    it('getBrokers()', async () =>
    {
        expect.assertions(1);
        const response = await krc.getBrokers();
        expect(response).toEqual([0]);
    });
});