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

## Other links
http://www.jeffgeerling.com/blogs/jeff-geerling/controlling-pwr-act-leds-raspberry-pi  
https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget?view=all
