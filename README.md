# Welcome to KnickKnack

#### Give the dog a bone!

#Galvanize Capstone Project - Allen Fordham

## Project description

KnickKnack is a tool to remotely dispense treats to my dog, Elsie. It features a webcam, so that I can be sure Elsie is in the room and interested in the dispenser before I hit the button to give her a treat. The controls are available on my personal website, allenfordham.com, so I can give her a treat at home from any computer, and even from a mobile device. I have also used this device to keep an eye on my six chickens and dispense a bit of birdseed to keep them busy in their coop. I don't recommend the second utilization over the long-term without modifications, as chickens like to peck at sensitive electronic components and have no qualms about pooping on delicate things.

## Project background

I attended my first ever Hackathon a few weeks ago. It was sponsored by a number of local tech companies (including possibly some here today) and was an exciting event for me. The sponsors brought a number of tools and items that the participants were encouraged to hack and learn to use. I picked a Raspberry Pi off a table, never having seen one before, and by the end of the Hackathon had build an extremely rudimentary but very popular machine that helped to earn our hardworking team the “best sports-themed hack”

I kept that Raspberry Pi, and in the last couple weeks have managed to get it to tell me some of its secrets. The environment is Linux, an environment totally unfamiliar to me. But I used my familiarity with Node, Python, Github, Javascript, and of course Google to find out its capabilities, and then realized that extra devices could be attached to and controlled by the Pi itself. I knew I had an idea for my capstone project!


## Mechanical

This dog treat dispenser is a Raspberry Pi running vc4l (video client for linux), which hosts the video streaming from the PiCam. It is listening for a Javascript program to tell it to send a series of directed energy pulses through a couple of GPIO pins. One is connected to a buzzer, the other is attached to a small electric motor that itself powers a device called a Scottish Yoke, a mechanism for translating rotational motion into reciprocating motion. This reciprocal movement slides a treat out of the bottom of the queue (it’s not a ‘pile’ or ‘stack’ because it’s FIFO, not LIFO and terminology is important.) The woodworking took me a couple days to get dialed in correctly, and the Raspberry Pi and I took a couple days getting to understand each other enough to make this project happen.

## Raspberry Pi

 My Raspberry Pi is a Pi 3 model B running Pixel Debian Jessie New Out Of the Box Software (NOOBS). The command line speaks Linux, and Node manages installation packages. The GPIO pin controls are managed by a plugin called johnny-five, written by SparkFun, which has offices in Boulder, CO. I wrote the program first in Python, and then in Javascript. The webcam is managed by "RPi Cam Web Interface". Commands are issued to the device via VNC, localtunnel javascript, and a USB keyboard and mouse. My biggest challenges in the project included learning how to solder, hosting the live streaming video on my personal website, and issuing controls to the Pi from a variety of remote sources.


## Hosting

The front end is hosted on my website, allenfordham dot com, and uses javascript, and HTML with ajax managing the live stream. Hosting the live stream over anything but a LAN requires port forwarding, which I have not yet implemented.


## The Way Forward

I have a future path for this project already in mind.  I’d like to incorporate the donation button into the treat dispense function. The goal is to allow anybody on the internet can log in to my device and, for a small donation to the ASPCA or MaxFund, watch Elsie eat a treat that they dispense themselves. A slightly chubbier dog will be worth is to me if it helps other animals in need. For this, the Pi needs to be connected to a network with port forwarding enabled so that the stream is available.


## Implementing this project yourself (in progress):

What you'll need:
 1. A Raspberry Pi Running Debian with Node Package Manager (NPM). I used a Pi 3 Model B running New Out of the Box Software (NOOBS).
 1. A webcam. I used the PiCam 1.2, which ran me about thirty bucks. It connects directly to the Pi's camera port and is plug-and-play.
 1. A small electrical motor. I used a standard 130 size 6v electric motor. The Adafruit model 711 will cost you about two bucks.
 1. A few basic shop tools:
   2. A thermoplastic adhesive applicator - also known as a hot glue gun
   2. A soldering iron. The KnickKnack uses jumper wires to connect electrical components - a hot glue gun can do the trick, but soldered pieces are more durable.
   2. Some wood for the frame and mechanical parts. I used 3/4 inch plywood for the body and a four-inch section of wooden lattice to push the treats out of the queue.
   2. A jigsaw or table saw for cutting out the wooden pieces. It also helps to have sandpaper, an electric drill,
