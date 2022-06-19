import { SanityClient } from "@sanity/client";

export const client = SanityClient({
    projectId: '262ngreb',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skD2rO1yE3yNOBrvyIAdLzO09WAgczMIHB1n0HtzYjQ1O01QaEdZkVSC8yzYZsw7ORvrP0tvPCrSdXlDFkjL3u1ZY0jphQmXeUyVa2KlvGEdNCb0JpomypRK0ae0PN46FzbOwr3DSN0dtC3Uak9jx6bum8pycUsUjbGVT6sIPHdRmAji4jmL',
    useCdn: false,
})