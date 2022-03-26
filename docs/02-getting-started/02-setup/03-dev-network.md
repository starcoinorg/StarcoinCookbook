# How to set up a local dev network

TODO
1. local dev node set up.
2. How to get STC in dev node.
3. How to set up a local cluster
4. Some useful tips for local dev node
    * How to skip time in local dev?



## Run Local Network

the following command could start new dev node:

```shell
starcoin -n dev
```

after this command, you could find node address in log or std output, it could like:

```shell
Self address is: /ip4/127.0.0.1/tcp/59476/p2p/12D3KooWPePRG6BDdjgtEYmPDxNyJfMWpQ1Rwgefuz9eqksLfxJb
```

then you could setup another node by this command:

```shell
starcoin -n dev --seed /ip4/127.0.0.1/tcp/59476/p2p/12D3KooWPePRG6BDdjgtEYmPDxNyJfMWpQ1Rwgefuz9eqksLfxJb

```

You could use subcommand console to start cli console:

```shell
starcoin -n dev console
```

repeat these steps, you cloud get multi node local dev network.


Run node by docker:

```shell
docker run --name starcoin -d --network host -v ~/.starcoin/:/root/.starcoin/ starcoin/starcoin:latest /starcoin/starcoin -n main
``` 