### Install the dependencies

Install node latest version (10.15.13)  
Install git latest version  
Install python 2.7 (not 3.6)  

### Windows instructions  

Open commnd prompt as **admin**:  

```
C:\> npm install --global --production windows-build-tools  
C:\> npm config set msvs_version 2015 --global
```

Close the shell and re-open as normal user:

```
C:\> set npm_config_node_gyp=C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js  
C:\> npm install -g node-gyp
```
example project
```
C:\> git clone https://github.com/chrishornmem/cpp_example.git  
C:\> cd cpp_example  
C:\cpp_example> node-gyp configure  
C:\cpp_example> node-gyp build
```

run the hello world example

```
C:\cpp_example> node hello
```

Outputs
```
world  
world 2
```

### References:

https://nodejs.org/api/addons.html#addons_n_api  
https://medium.com/@tarkus/how-to-call-c-c-code-from-node-js-86a773033892  
https://stackoverflow.com/questions/50196514/most-basic-example-of-adding-a-opencv-c-add-on-to-node-js  
https://github.com/nodejs/node-gyp/issues/1628  
