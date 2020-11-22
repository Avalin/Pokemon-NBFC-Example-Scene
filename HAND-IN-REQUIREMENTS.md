Hand-in 1

Expectations for hand-in:
It is expected that you hand in a programmed web page with some basic structure of design and 
code in HTML, CSS and Javascript. This is a working web page prototype and you are allowed to use a framework for this part. 
Then integrated into the design of the page is one A-Frame prototype. 

There are many possible solutions here: 
It is possible to create different designs like A-Frame is an image and when you click on it, 
you open a new page with the real A-Frame solution or A-Frame can be integrated in the first web page. 
There can also be other solutions depending on what makes sense and how the user must open and handle the VR. 
This is up to you to decide.

It must be very clear to the user what is expected of hardware like headset and controllers.

In this hand-in you must: 
1. [✔]
Build a website with at least one HTML page with CSS and Javascript. (You are allowed to use Bootstrap and Jquery or the like and find templates online.)  

2. [✔]
Setup a standard file structure for the web in your system and also create a folder structure for components.

3. [✔]
Integrate A-Frame in your HTML page to make it look natural for the web.

4. [✔]
Develop/build a scene, 

5. [✔]
Create a 3D world by loading 3D models, the 3D models can be downloaded from the web, asset store etc. 
They must have textures. They can have animations. Be sure to choose the right format for the web.

6. [✔]
Setup camera to user-height and control position on camera in entity

7. [✔]
Setup lights (at least one of each) and shadows. Use the frame inspector ctrl-alt-i to help 
position and control the lights in an easy way. Then copy the html code to your file. 

8. [✔]
Setup handlers for animation and show basic coded animations on your models, lights etc.
-----------------------------------------------------------------------------

Hand-in 2
Expectations for hand-in:

In this hand-in you are expected to work only with the code. You can use the basic setup from hand-in 1. 
In the javascript files make sure to use comments to show us, where hand-in 2 is starting and ending 
and also comment on methods, handlers etc.  

In this hand-in you must show that you can:
1. Use a VR headset                                                         [✔] //Tested both hand-ins with Oculus Quest.
2. Use Controllers                                                          [✔] //Tested hand-in 2 with Oculus Quest controllers.
3. Use physics system                                                       [✔] //Generated pokéballs use physics.      
4. Code a working handler in Javascript                                     [✔] //Multiple scripts does this. Example: a-frame-entity-spawners
5. Use a reference to the 3D model in javascript.                           [✔] //Multiple scripts does this. Example: a-frame-pokemon-interaction
6. Change behavior in the 3D model using Javascript                         [✔] //Multiple scripts does this. Example: a-frame-pokemon-interaction
7. Add Gaze based interaction                                               [✔] //Interaction with pokémons and spawning pokéballs can be done with gaze
8. Add teleportation                                                        [✔] //Works with minor bugs (Sometimes spawning in ground, initially spawns in the air)
9. Add tracked controls                                                     [✔] //Works with WASD and thumbstick on Oculus Quest
10. Write and use a custom component with standard methods like init etc.   [✔] //Multiple scripts does this. Example: a-frame-pokemon-interaction

Your documentation here is the HTML website with javascript files and also one (1) video showing VR headset and controllers in use. 

You must integrate the video in the webpage [✔] and hand-in the complete solution. 
Hand-in is later in wiseflow. It is therefore possible to continue work until later.

-------------------------------------------------------------------------------

Known bugs:
- Hand in 1:
- Camera has a "boaty" movement

- Hand in 2: 
- Camera height at spawn vs camera height when teleporting issue
- Not all Oculus Quest button component registers/works? i.e. I could not make a component for when using the thumbstick