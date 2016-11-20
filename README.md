# Raspberry Pi Zero

## SSH over USB configuration

To connect to the RPi Zero without a network cable:

1. Install Raspbian on a microSD card
2. Mount the /boot partition on the card
3. In `config.txt`, add `dtoverlay=dwc2` on a new line
4. In `cmdline.txt`, add `modules-load=dwc2,g_ether` after `rootwait`  

  > NOTE: These are space-delimited values  
  
5. Unmount and eject the card, installing it in the Pi Zero
6. Connect a microUSB cable to the `USB` port (not the `PWR IN` port) on the Pi
7. Wait a minute or two for the Pi to boot. 
  - Notice a new `USB Ethernet` device in your network console.
  - In order to SSH, you will need to have this device in a "Connected" state
  - You may need to set the device to `link-local` mode in order for this to work
8. SSH into the device with `ssh pi@raspberrypi.local`

> It's even cooler if you can share your WiFi connection over Ethernet. 
Share the *WiFi* connection, not the ethernet-over-USB connection, 
or you will be sad.

## Software

### Node.js

Download the latest `armv6` release from the [Node.js site](https://nodejs.org/en/download/).

Unzip with `tar xvf $FILE_YOU_DOWNLOADED`.

Add that directory's `bin` folder to your path.

### websocketd

Download the latest `arm` release (not `arm64`) from [GitHub](https://github.com/joewalnes/websocketd/releases/latest)

Use `wget` not `curl -O`, as RPi native `curl` seems to mess up the file in transit.

Unzip, and place `websocketd` somewhere in your `PATH` (I used `/usr/bin` because it's easy)

## Fun things that can be used for telemetry

- `/sys/class/net/usb0/statistics/tx_packets` for network packets transmitted
- Check other `/sys/class` files for fun stuff (like LED controls, etc)

## Bundled apps in this repo

- `reporter/`: an app that curls a URL of your choosing with deets
  - set host and port for URL in `app.js`
- `nmon/`: an app that can use websockets to visualize network stuff
  - run with `http-server -p 9999 & websocketd --port=8080 python nmon.py`
  - kill with `killall node websocketd`
  
## Other links
http://www.jeffgeerling.com/blogs/jeff-geerling/controlling-pwr-act-leds-raspberry-pi  
https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget?view=all
