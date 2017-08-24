Q. The Marco Polo Game : -

a. Put the url http://localhost:3000/api/v1/game/macropolo in your brower. 
b. See the expected output in api response. 
c. If some eror occured it will send with 404.

Q. Simple Question about NodeJs

Below are the scenario where we should not use node js : - 
1. Node js is not suitable to high intensive CPU tasks (image processing) as it's a single threaded. Yes we do have work around for that using cluster and child processer modules. but it's still work with IPC  that is quitely a costly operation.

2. We should never use node js when your application require multi threading feature. We should only use node when we have lots of I/O operation. that make use much capability of CPU.

3. We should always take thing in mind that node doesn't support 64 bit integers. so we will not able to work on high number.

Q. Implementing a User Story

a. Put the url http://localhost:3000/api/v1/7segment in your brower. 
b. in file output_user_story_1.txt the file output_ user_story_1.txt will be created automatically in you application on successfully compilation. 
c. If character string is not a number it will replace that place with "?".
